import React from "react";

interface SectionProps {
  classname?: string;
  children: React.ReactNode;
}

const Section = ({ classname, children }: SectionProps) => {
  return (
    <section className={` ${classname} mt-10 px-4 md:px-8 lg:px-12 xl:px-16`}>
      {children}
    </section>
  );
};

export default Section;
