"use client";

import Image from "next/image";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import SocialLogin from "./components/SocialLogin";
const SignUpPage = () => {
    return (
        <div className="container px-24 mx-auto py-24">
            <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                    <Image
                        src="/assets/images/login/login.svg"
                        height="540"
                        width="540"
                        alt="login image"
                    />
                </div>
                <div className="border-2 p-12">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Sign In
                    </h6>

                    <div>
                        
                        <LoginForm />
                        <h6 className="my-12 text-center">or sign in with</h6>
                        <SocialLogin/>
                        <h6 className="my-12 text-center">
                            not have account ?{" "}
                            <Link className="text-primary font-semibold" href={"/signup"}>
                                Sign Up
                            </Link>
                        </h6>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default SignUpPage;





