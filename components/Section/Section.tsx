import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="mt-10 px-4 md:px-8 lg:px-12 xl:px-16">
      {children}
    </section>
  );
};

export default Section;
