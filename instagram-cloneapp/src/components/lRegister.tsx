"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
// import axios from "axios";
// import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import * as yup from "yup";

// const registerSchema = yup.object().shape({
//     email: yup.string().required("email is required"),
//     name: yup.string().required("name is required"),
//     username: yup.string().required("username is required"),
//     password: yup.string().required("password is required"),
// });

// interface IRegisterForm {
//     email : string;
//     name : string;
//     username : string;
//     password : string;
// }

export default function Lregiters() {
  // const InitialValue : IRegisterForm = {email : "", name: "", username: "", password: ""}
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-4">
          <div className="grid grid-cols-1 justify-items-center">
            <div className="justify-items-end hidden">
              <Image
                src={"/register.jpg"}
                width={400}
                height={400}
                alt="registerloginapp"
              />
            </div>
            <div className="flex flex-col p-5 object-center max-md:items-center gap-4">
              <div className=" flex flex-col p-9 max-md:p-4 border border-gray-400 rounded-sm items-center gap-3 shadow-2xs">
                <Image
                  src={"/logo.jpg"}
                  width={200}
                  height={200}
                  alt="logoInstagram"
                />
                <h2 className="text-center tracking-wide">
                  Sign up to see photos and videos <br /> from your friends.{" "}
                </h2>
                <input
                  type="Email"
                  placeholder="Email"
                  id="Email"
                  className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                />
                <input
                  type="Password"
                  placeholder="Password"
                  id="Password"
                  className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                />
                <input
                  type="Full Name"
                  placeholder="Full Name"
                  id="Full Name"
                  className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                />
                <input
                  type="Username"
                  placeholder="Username"
                  id="Username"
                  className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                />
                <h3 className="text-center tracking-wide text-sm text-gray-500">
                  People who use our service may have uploaded <br /> your
                  contact information to Instagram. Learn <br /> More{" "}
                </h3>
                <h4 className="text-center tracking-wide text-sm text-gray-500">
                  By signing up, you agree to our Terms , Privacy <br /> Policy
                  and Cookies Policy .{" "}
                </h4>
                <Button className=" w-full h-[40px] p-2 text-sm bg-blue-600 hover:bg-blue-800">
                  Sign Up
                </Button>
              </div>
              <div className=" flex flex-col items-center justify-center  text-center md:border border-gray-400  h-[80px] rounded-sm">
                <div className=" flex flex-col items-center text-center">
                  <p className="text-center tracking-wide text-md">
                    Have an Account? <br />{" "}
                    <a
                      href={"/Login"}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
