import BackToTop from "@/components/BackToTop/BackToTop";
import PaintFetch from "@/components/DataFetch/PaintFetch/PaintFetch";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";

const Paint = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <PaintFetch />
      </Section>
      <BackToTop />
      <Footer />
    </main>
  );
};

export default Paint;
