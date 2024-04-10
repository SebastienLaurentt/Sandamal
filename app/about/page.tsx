import BackToTop from "@/components/BackToTop/BackToTop";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import aboutImg from "@/public/images/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <main>
      <Section>
        <div className="my-8 flex flex-col items-center xl:flex-row xl:gap-x-4 xl:p-8 ">
          <Image
            src={aboutImg}
            alt="About"
            className="xl:w-1/2 xl:p-16 2xl:w-2/5"
          />
          <div>
            <h2>About Me</h2>
            <p>Ohhh le essseuuuuh</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              laborum quod labore iusto praesentium aperiam totam repellendus
              nesciunt, expedita consequatur hic ut debitis illum ex beatae!
              Nemo, quos. Laboriosam saepe delectus voluptas, sapiente,
              accusamus expedita reiciendis harum, reprehenderit corporis
              aperiam optio laudantium! Voluptas voluptatem, dignissimos earum
              dolore quis similique reiciendis?
            </p>
          </div>
        </div>
        <BackToTop />
        <Footer />
      </Section>
    </main>
  );
};

export default About;
