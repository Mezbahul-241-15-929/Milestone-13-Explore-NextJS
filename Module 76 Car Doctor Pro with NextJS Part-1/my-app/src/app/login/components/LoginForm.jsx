"use client"

import { signupUser } from "@/app/actions/auth/signupUser";
import { useSession, signIn, signOut } from "next-auth/react"

const { default: Link } = require("next/link")

const LoginForm = (e) => {
    const handleSignin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await signIn("credentials", { email, password ,callbackUrl:"/"});
        }
        catch(error){
            console.log(error);
            alert("failed")
        }
        // const resp = await fetch("https://car-doctor-pro-nine.vercel.app/signup/api", {
        //   method: "POST",
        //   body: JSON.stringify(newUser),
        //   headers: {
        //     "content-type": "application/json",
        //   },
        // });
        // if (resp.status === 200) {
        //   event.target.reset();
        // }
    };

    return (
        <div className="border-2 p-12">
            <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                Sign In
            </h6>
            <form onSubmit={handleSignin} action="">
                <label htmlFor="email">Email</label> <br />
                <input
                    type="text"
                    name="email"
                    placeholder="your email"
                    className="mt-3 w-full input input-bordered"
                />
                <br /> <br />
                <label htmlFor="password">Password</label> <br />
                <input
                    type="password"
                    name="password"
                    placeholder="your password"
                    className="w-full mt-3 input input-bordered"
                />
                <br />
                <button
                    type="submit"
                    className="w-full btn btn-primary mt-12 text-lg"
                >
                    Sign In
                </button>
            </form>
            <div>
                <h6 className="my-12 text-center">or sign in with</h6>
                {/* <SocialSignin /> */}
                <h6 className="my-12 text-center">
                    not have account ?{" "}
                    <Link className="text-primary font-semibold" href={"/signup"}>
                        Sign Up
                    </Link>
                </h6>
            </div>
        </div>
    );
}


export default LoginForm;








