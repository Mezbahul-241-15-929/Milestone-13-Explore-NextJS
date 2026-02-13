"use client";

import Image from "next/image";
import LoginForm from "./components/LoginForm";
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
                <LoginForm />
            </div>
        </div>
    );
}
export default SignUpPage;





