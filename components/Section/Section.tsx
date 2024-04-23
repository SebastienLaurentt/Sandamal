import React from "react";

interface SectionProps {
  marginTop?: boolean;
  marginBottom?: boolean;
  paddingHorizontal?: boolean;
  classname?: string;
  children: React.ReactNode;
}

const Section = ({
  marginTop,
  marginBottom,
  paddingHorizontal,
  classname,
  children,
}: SectionProps) => {
  const isMarginTop = marginTop ? "mt-8 md:mt-12 lg:mt-16" : "";
  const isMarginBottom = marginBottom ? "mb-8 md:mb-12 lg:mb-16" : "";
  const isPaddingHorizontal = paddingHorizontal
    ? "px-4 md:px-6 lg:px-8 xl:px-16 "
    : "";
  return (
    <section
      className={` ${classname} ${isMarginTop} ${isMarginBottom} ${isPaddingHorizontal} mx-auto xl:max-w-[2000px] `}
    >
      {children}
    </section>
  );
};

export default Section;
