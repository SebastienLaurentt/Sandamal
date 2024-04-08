import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import logoBlack from "../../public/images/logoBlack.svg";

const SignUp = () => {
  return (
    <div className="m-8">
        <div className="flex flex-col items-center lg:mt-20">
          <Image src={logoBlack} alt="logo" className="" />
          <span className="uppercase lg:m-12 lg:text-[20px] mt-8">
            What&apos; s News ?{" "}
          </span>
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <Input
              placeholder="Email Adress"
              className="w-40 lg:w-80 mt-4 lg:text-xl lg:p-8"
            />
            <Button className="w-40 mt-4 lg:text-xl lg:p-8">SIGN UP</Button>
          </div>
        </div>
      </div>
  )
}

export default SignUp