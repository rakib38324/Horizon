"use client";
import React, { useState } from "react";
import { logoIcon, demo } from "@/assets/Images/index";
import Image from "next/image";
import FormInputBox from "@/utilities/FormInputBox";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  state: string;
  postalCode: number;
  dateOfBirth: string;
  ssn: number;
}

const defaultData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  state: "",
  postalCode: 0,
  dateOfBirth: "",
  ssn: 0,
};

const SignUpClient = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(defaultData);

  const inputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid p-2 lg:grid-cols-2">
        <div className="flex items-center justify-center w-full min-h-screen lg:my-20">
          <div className="">
            <div className="flex gap-2 my-auto">
              <Image src={logoIcon} className="size-10" alt="Logo" />

              <p className="my-auto text-3xl font-bold">Horizon</p>
            </div>

            <div className="mt-5">
              <p className="text-4xl font-semibold">Sign up</p>
              <p className="text-base text-[#475467] mt-5">
                Please enter your details.
              </p>

              <div className="flex flex-col justify-center w-full mt-10 items-between">
                <form className="grid grid-cols-2 gap-4">
                  <FormInputBox
                    type="text"
                    label={"First Name"}
                    name="firstName"
                    idHtmlFor="firstName"
                    value={formData.firstName}
                    placeholder={"Ex: Jhon"}
                    required={true}
                    inputHandler={inputHandler}
                  />
                  <FormInputBox
                    type="text"
                    label={"Last Name"}
                    name="lastName"
                    idHtmlFor="lastName"
                    value={formData.lastName}
                    placeholder={"Ex: Deo"}
                    required={true}
                    inputHandler={inputHandler}
                  />
                  <div className="col-span-2">
                    <FormInputBox
                      type="text"
                      label={"Address"}
                      name="address"
                      idHtmlFor="address"
                      value={formData.address}
                      placeholder={"Enter your specific address"}
                      required={true}
                      inputHandler={inputHandler}
                    />
                  </div>
                  <FormInputBox
                    type="text"
                    label={"State"}
                    name="state"
                    idHtmlFor="state"
                    value={formData.state}
                    placeholder={"ex: NY"}
                    required={true}
                    inputHandler={inputHandler}
                  />
                  <FormInputBox
                    type="number"
                    label={"Postal Code"}
                    name="postalCode"
                    idHtmlFor="postalCode"
                    value={formData.postalCode}
                    placeholder={"ex: 11101"}
                    required={true}
                    inputHandler={inputHandler}
                  />

                  <FormInputBox
                    type="date"
                    label={"Date of Borth"}
                    name="dateOfBirth"
                    idHtmlFor="dateOfBirth"
                    value={formData.dateOfBirth}
                    placeholder={"yyyy-mm-dd"}
                    required={true}
                    inputHandler={inputHandler}
                  />

                  <FormInputBox
                    type="number"
                    label={"SSN"}
                    name="ssn"
                    idHtmlFor="ssn"
                    value={formData.ssn}
                    placeholder={"ex: 1234"}
                    required={true}
                    inputHandler={inputHandler}
                  />

                  <div className="col-span-2">
                    <FormInputBox
                      type="email"
                      label={"Email"}
                      name="email"
                      idHtmlFor="email"
                      value={formData.email}
                      placeholder={"Enter your email"}
                      required={true}
                      inputHandler={inputHandler}
                    />
                  </div>
                  <div className="col-span-2">
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
                  </div>

                  <button className="w-full col-span-2 p-3 font-bold text-white bg-blue-500 rounded-md ">
                    Login
                  </button>

                  <div className="flex justify-center col-span-2 ">
                    <p className="px-2 text-sm font-normal text-center">
                      Already create your account?{" "}
                      <span
                        className="font-semibold text-blue-600 cursor-pointer"
                        onClick={() => router.push("/sign-in")}
                      >
                        SignIn
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full h-full min-h-screen lg:flex items-center justify-center   bg-[#F3F9FF] overflow-hidden">
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

export default SignUpClient;
