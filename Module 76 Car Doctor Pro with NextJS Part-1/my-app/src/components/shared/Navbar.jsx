"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session)
  return (
    <div className="bg-base-100 border-b">
      <div className="navbar container mx-auto">

        {/* Left: Logo */}
        <div className="navbar-start">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={100}
              height={60}
            />
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="font-semibold hover:text-primary duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="navbar-end gap-3">
          <Link href="/appointment" className="btn btn-outline btn-primary">
            Appointment
          </Link>
          {
            status == "authenticated" ? (<>
            <img src={session?.user?.image} alt=""  height={40} width={40}/>
              <li onClick={() => signOut()} className="btn btn-primary">
                Logout
              </li>
            </>) :
              (
                <>

                  <Link href="/login" className="btn btn-primary">
                    Login
                  </Link>
                  <Link href="/signup" className="btn btn-primary">
                    Signup
                  </Link>
                </>)
          }
        </div>

      </div>
    </div>
  );
};

const navItems = [
  { title: "Home", path: "/" },
  // { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  // { title: "Blog", path: "/blog" },
  // { title: "Contact", path: "/contact" },
  { title: "My Bookings", path: "/my-bookings" },
];

export default Navbar;
