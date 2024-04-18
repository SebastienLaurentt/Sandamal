"use client";

import { sendEmail } from "@/app/src/actions";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const pathname = usePathname();

  const footerPosition = pathname === "/" ? "absolute bottom-0" : "";
  const textColor =
    pathname === "/" ? "text-secondary-foreground" : "text-foreground";
  const emailButtonBorderColor =
    pathname === "/" ? "border-white" : "border-black";
  const emailPlaceholderTextColor =
    pathname === "/"
      ? "placeholder:text-secondary-foreground"
      : "placeholder:text-foreground";
  const followMeTextColor =
    pathname === "/" ? "text-foreground" : "text-secondary-foreground";
  const followMeBgColor = pathname === "/" ? "bg-background" : "bg-primary";
  const followMeHover =
    pathname === "/"
      ? "xl:hover:bg-transparent xl:hover:text-white"
      : "xl:hover:bg-background xl:hover:text-foreground xl:hover:border-2 xl:hover:border-black";

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  const [formData, setFormData] = useState({
    email: "",
  });

  const [emailError, setEmailError] = useState(false); // Suivre si une erreur s'est produite lors de la soumission du formulaire
  const [inputFocused, setInputFocused] = useState(false); // Suivre si l'input est sélectionné

  const [buttonText, setButtonText] = useState("FOLLOW ME"); // Texte initial du bouton
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message if field is filled
    setEmailError(false);
  };

  const handleInputFocus = () => {
    setInputFocused(true); 
    setEmailError(false);
  };

  const handleInputBlur = () => {
    setInputFocused(false); 
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let hasErrors = false;
    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        setEmailError(true); 
        hasErrors = true;
      }
    });
    if (!hasErrors) {
      // Convert formData to FormData object
      const formDataObject = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObject.append(key, value);
      });

      // Send email if all fields are filled
      sendEmailAction(formDataObject);
      setButtonText("SENDING..."); 
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      gsap.fromTo(
        "#footer",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.5 }
      );
    }
  }, [pathname]);

  useEffect(() => {
    if (sendEmailState.success) {
      setFormData({
        email: "",
      });
      setButtonText("FOLLOW ME"); 
      setConfirmationMessage("THANKS!"); 
    
      // Clear confirmation message after 2 seconds
      const timer = setTimeout(() => {
        setConfirmationMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (sendEmailState.error) {
      setButtonText("Error"); 
    }
  }, [sendEmailState]);

  return (
    <footer
      id="footer"
      className={`${footerPosition} mx-auto w-full pb-8`}
    >
      <div className="flex flex-col items-center">
        <span className={`text-md uppercase ${textColor} lg:text-3xl`}>
          Keep in touch
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:gap-x-2 "
        >
          <Input
            type="email"
            placeholder={emailError && !inputFocused ? "Enter Your Email" : "Email"} // Utiliser "Your email" seulement si l'erreur s'est produite et que l'input n'est pas sélectionné
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={handleInputFocus} 
            onBlur={handleInputBlur} 
            className={`mx-auto mt-4 w-40 border-2 ${emailButtonBorderColor} ${textColor} ${emailPlaceholderTextColor} bg-transparent ${
              emailError && !inputFocused
                ? "border-red-500 font-semibold placeholder:text-red-500"
                : ""
            }`} 
          />
          <div className="flex items-center">
            <Button
              type="submit"
              aria-label="Envoyer le formulaire"
              className={`mt-4 w-40 ${followMeBgColor} ${followMeTextColor} ${followMeHover}`}
            >
              {confirmationMessage ? confirmationMessage : buttonText}
            </Button>
          </div>
        </form>
        <div className="flex flex-row pt-4">
          <p
            className={`${textColor}  max-w-[200px] text-center text-[14px] leading-5 xl:max-w-[300px] xl:text-sm xl:leading-6`}
          >
            Welcome to my lands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
