import React from "react";

interface SectionProps {
  marginTop?: boolean;
  marginBottom?: boolean;
  classname?: string;
  children: React.ReactNode;
}

const Section = ({ marginTop, marginBottom, classname, children }: SectionProps) => {
  const isMarginTop = marginTop ? "mt-8 md:mt-12 lg:mt-16" : "";
  const isMarginBottom = marginBottom ? "mb-8 md:mb-12 lg:mb-16" : "";
  return (
    <section className={` ${classname} ${isMarginTop} ${isMarginBottom}`}>
      {children}
    </section>
  );
};

export default Section;
