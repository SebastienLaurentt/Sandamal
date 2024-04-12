import BackToTop from "@/components/BackToTop/BackToTop";
import DrawFetch from "@/components/DataFetch/DrawFetch/DrawFetch";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";

const Draw = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <DrawFetch />
      </Section>
      <BackToTop />
    </main>
  );
};

export default Draw;
