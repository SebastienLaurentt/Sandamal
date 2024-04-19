import Section from "@/components/Section/Section";
import aboutImg from "@/public/images/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <Section paddingHorizontal={true}>
        <div className="my-8 flex flex-col items-center lg:flex-row lg:gap-x-4 lg:p-2 xl:p-8 ">
          <Image
            src={aboutImg}
            alt="About"
            className="lg:w-1/2 lg:p-2 xl:p-16 2xl:px-32"
          />
          <div>
            <h2>Who am i ?</h2>
            <div className="flex flex-col gap-y-2 xl:max-w-[600px]">
              <p>
                Verily, I am Sandamal Perez, yet I beseech thee to address me as
                Sandamal, a name bestowed upon me akin to the &quot;Moon
                Flower&quot;, a symbol of my origins.
              </p>
              <p>
                Born in the lands of Sri Lanka, I was reared amidst the fields
                of France, Lyon now being my humble dwelling. In the noble arts
                of graphic design and 3D animation, I have spent nigh on nine
                years as a Generalist 3D artisan.
              </p>
              <p>
                At this hour, I labor upon mine own ventures, comprising the
                crafts of sketching, painting, drawing, and the harmonious
                strains of musical composition.
              </p>
              <p>
                Tis now the appointed time for me to unveil my works. Thus, I
                embark upon this website, a digital scroll wherein I shall
                reveal unto thee my realm of creativity.
              </p>
              <p>With warm regards,</p>
              <p>Sandamal</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
