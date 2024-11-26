"use client";
import React, { useState } from "react";
import { logoIcon, demo } from "@/assets/Images/index";
import Image from "next/image";
import FormInputBox from "@/utilities/FormInputBox";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

const defaultFormData: FormData = {
  email: "",
  password: "",
};

const SignInClient = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const inputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid md:grid-cols-2">
        <div className="flex items-center justify-center w-full min-h-screen">
          <div>
            <div className="flex gap-2 my-auto">
              <Image src={logoIcon} className="size-10" alt="Logo" />

              <p className="my-auto text-3xl font-bold">Horizon</p>
            </div>

            <div className="mt-5">
              <p className="text-4xl font-semibold">Log in</p>
              <p className="text-base text-[#475467] mt-5">
                Welcome back! Please enter your details.
              </p>

              <div className="flex flex-col justify-center w-full mt-10 items-between">
                <form className="flex flex-col gap-4">
                  <FormInputBox
                    type="email"
                    label={"Email"}
                    name="email"
                    idHtmlFor="email"
                    value={formData.email}
                    placeholder={"Enter your email"}
                    required={true}
                    inputHandler={inputHandler}
                    className="text-xl"
                  />
                  <FormInputBox
                    type="password"
                    label={"Psssword"}
                    name="password"
                    idHtmlFor="password"
                    value={formData.password}
                    placeholder={"Enter your password"}
                    required={true}
                    inputHandler={inputHandler}
                    className="text-xl"
                  />

                  <button className="w-full p-3 font-bold text-white bg-blue-500 rounded-md">
                    Login
                  </button>

                  <p className="px-2 text-sm font-normal text-center">
                    Don’t have an account?{" "}
                    <span
                      className="font-semibold text-blue-600 cursor-pointer"
                      onClick={() => router.push("/sign-up")}
                    >
                      SignUp
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full min-h-screen md:flex items-center justify-center  my-auto bg-[#F3F9FF] overflow-hidden">
          <div className="">
            <Image
              src={demo}
              className="w-full border-4 border-black md:ml-32 lg:ml-56 rounded-xl"
              alt="sign-in-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInClient;
