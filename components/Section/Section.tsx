import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="mx-4 my-20">{children}</section>;
};

export default Section;
