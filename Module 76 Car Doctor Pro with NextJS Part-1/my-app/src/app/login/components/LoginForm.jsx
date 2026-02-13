"use client"

import { signupUser } from "@/app/actions/auth/signupUser";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const { default: Link } = require("next/link")

const LoginForm = (e) => {
    const router = useRouter();
    const handleSignin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })
        try {
            const response = await signIn("credentials", {
                email,
                password,
                callbackUrl: "/",
                redirect: false,
            });
            if (response.ok) {
                router.push("/");
                form.reset();
                toast.success("Logied In successfully");

            }
            else {
                toast.error("Authentication Failed");

            }
        }
        catch (error) {
            toast.error("Authentication Failed");
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
    );
}


export default LoginForm;








