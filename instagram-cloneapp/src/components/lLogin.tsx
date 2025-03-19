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

export default function Llogin() {
  // const InitialValue : IRegisterForm = {email : "", name: "", username: "", password: ""}
  return (
    <div className="mt-[100px]">
      <div className="container mx-auto">
        <div className="p-4">
          <div className="grid max-sm:grid-cols-1 grid-cols-2 max-sm:justify-items-center">
            <div className="justify-items-end max-sm:hidden">
              <Image
                src={"/register.jpg"}
                width={400}
                height={400}
                alt="registerloginapp"
              />
            </div>
            <div className="flex flex-col p-5 object-center justify-start gap-7 md:w-[400px] max-sm:w-[350px] mt-[50px]">
              <div className=" flex flex-col p-9 max-md:p-4 border border-gray-400 rounded-sm items-center gap-5 shadow-2xs">
                <Image
                  src={"/logo.jpg"}
                  width={200}
                  height={200}
                  alt="logoInstagram"
                />
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
                <Button className=" w-full h-[40px] p-2 text-sm bg-blue-600 hover:bg-blue-800">
                  Sign In
                </Button>
              </div>
              <div className=" flex flex-col items-center justify-center  text-center md:border border-gray-400  h-[80px] rounded-sm">
                <div className=" flex flex-col items-center text-center">
                  <p className="text-center tracking-wide text-md">
                    Dont Have an Account? <br />{" "}
                    <a
                      href={"/Register"}
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      Sign Up
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
