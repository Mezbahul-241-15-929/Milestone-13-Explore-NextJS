import dbConnect from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


export const authOptions={
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)

    //   const res = await fetch("/your/endpoint", {
    //     method: 'POST',
    //     body: JSON.stringify(credentials),
    //     headers: { "Content-Type": "application/json" }
    //   })
    //   const user = await res.json()

    // console.log("Createntials",credentials)

    const {username,password}=credentials;
    const user = await dbConnect("students").findOne({username});
    const isPasswordOK = password== user.password;

    if(isPasswordOK){
        return user
    }

    else{
        return null
    }

    //   // If no error and we have user data, return it
    //   if (res.ok && user) {
    //     return user
    //   }
    //   // Return null if user data could not be retrieved
    //   return null
    }
  })
],
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
],
callbacks: {
  async session({ session, token, user }) {
    if(token){
      session.user.username=token.username;
      session.user.role= token.role;
    }
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    if(user){
      token.username=user.username;
      token.role=user.role;
    }
    return token
  }
}
}