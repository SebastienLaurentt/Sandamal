import Section from "@/components/Section/Section";
import aboutImg from "@/public/images/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <Section paddingHorizontal={true}>
        <div className="my-8 flex flex-col items-center xl:flex-row xl:gap-x-4 xl:p-8 ">
          <Image
            src={aboutImg}
            alt="About"
            className="xl:w-1/2 xl:p-16 2xl:px-32"
          />
          <div>
            <h2>Who am i ?</h2>
            <div className="flex flex-col gap-y-2 xl:max-w-[600px]">
              <p>My name is Julien Sandamal Perez </p>
              <p>
                I prefer Sandamal. it is my born name and it mean Moon Flower.
              </p>
              <p>
                I was born in Sri Lanka, grew up and raised in France, and
                currently live in Lyon in France. I studied graphic design, 3D
                animation. I work in that field as Genaralist 3D during about 9
                years.
              </p>
              <p>
                I&apos;m currently working on my own projects (sketch, paint,
                draw, music as well).
              </p>
              <p>
                It is time for me to show what I&apos;ve done and so I decide to
                create this website to show you my univers
              </p>
              <p>
                E-Mail me if you want to say Hello:
                perez.julien.sandamal@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
