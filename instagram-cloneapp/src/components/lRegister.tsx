/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "@/lib/axios";

const registerSchema = yup.object().shape({
  email: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
  username: yup.string().required("username is required"),
  fullname: yup.string().required("fullname is required"),
});

interface IRegisterForm {
  email: string;
  password: string;
  username: string;
  fullname: string;
}

export default function Lregiters() {
  const initialValue: IRegisterForm = {
    email: "",
    password: "",
    username: "",
    fullname: "",
  };
  const addRegister = async (
    values: IRegisterForm,
    action: FormikHelpers<IRegisterForm>
  ) => {
    try {
      await axios.post(
        "/users",
        values
      );
      action.resetForm();
      toast.success("Register Succsess !");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Register Failed!");
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-4">
          <div className="grid grid-cols-1 justify-items-center">
            <Formik
              initialValues={initialValue}
              validationSchema={registerSchema}
              onSubmit={addRegister}
            >
              {(props: FormikProps<IRegisterForm>) => {
                const { errors, touched } = props;
                return (
                  <Form>
                    <div className="flex flex-col p-5 object-center max-md:items-center gap-4">
                      <div className=" flex flex-col p-9 max-md:p-4 border border-gray-400 rounded-sm items-center gap-3 shadow-2xs">
                        <Image
                          src={"/logo.jpg"}
                          width={200}
                          height={200}
                          alt="logoInstagram"
                        />
                        <h2 className="text-center tracking-wide">
                          Sign up to see photos and videos <br /> from your
                          friends.{" "}
                        </h2>
                        <Field
                          name="email"
                          placeholder="Add a new email"
                          className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                        />
                        <div className="bg-white">
                          {touched.email && errors.email ? (
                            <div className="text-red-500 text-xs">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>

                        <Field
                          name="password"
                          placeholder="Add a new password"
                          className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                        />
                        <div className="bg-white">
                          {touched.password && errors.password ? (
                            <div className="text-red-500 text-xs">
                              {errors.password}
                            </div>
                          ) : null}
                        </div>

                        <Field
                          name="username"
                          placeholder="Add a new Full Name"
                          className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                        />
                        <div className="bg-white">
                          {touched.username && errors.username ? (
                            <div className="text-red-500 text-xs">
                              {errors.username}
                            </div>
                          ) : null}
                        </div>
                        <Field
                          name="fullname"
                          placeholder="Add a new Username"
                          className="border border-gray-400 rounded-sm w-full h-[40px] p-2 text-sm bg-gray-100"
                        />
                           <div className="bg-white">
                          {touched.fullname && errors.fullname ? (
                            <div className="text-red-500 text-xs">
                              {errors.fullname}
                            </div>
                          ) : null}
                        </div>
                        <h3 className="text-center tracking-wide text-sm text-gray-500">
                          People who use our service may have uploaded <br />{" "}
                          your contact information to Instagram. Learn <br />{" "}
                          More{" "}
                        </h3>
                        <h4 className="text-center tracking-wide text-sm text-gray-500">
                          By signing up, you agree to our Terms , Privacy <br />{" "}
                          Policy and Cookies Policy .{" "}
                        </h4>
                        <Button type="submit" className=" w-full h-[40px] p-2 text-sm bg-blue-600 hover:bg-blue-800">
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
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
