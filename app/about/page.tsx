import BackToTop from "@/components/BackToTop/BackToTop";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import aboutImg from "@/public/images/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <Section>
        <div className="my-8 flex flex-col xl:flex-row xl:gap-x-4 xl:p-4 ">
          <Image src={aboutImg} alt="About" />
          <div>
            <h2>About Me</h2>
            <p>Ohhh le essseuuuuh</p>
          </div>
        </div>
        <BackToTop />
        <Footer />
      </Section>
    </main>
  );
};

export default About;
