import SandamalIcon from "../SandamalIcon/SandamalIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div
      className=" p-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))`,
      }}
    >
      <div className="flex flex-col items-center lg:mt-20">
        <SandamalIcon fillColor="black" />
        <span className="mt-8 uppercase lg:m-12 lg:text-[20px]">
          What&apos; s News ?{" "}
        </span>
        <div className="flex flex-col md:flex-row md:gap-x-4">
          <Input
            placeholder="Email Adress"
            className="mt-4 w-40 lg:w-80 lg:p-8 lg:text-xl "
          />
          <Button className="mt-4 w-40 lg:p-8 lg:text-xl">SIGN UP</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
