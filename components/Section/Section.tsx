import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="mx-4 mt-10">{children}</section>;
};

export default Section;
