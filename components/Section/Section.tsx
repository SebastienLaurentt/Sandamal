import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="m-4">{children}</section>;
};

export default Section;
