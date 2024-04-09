import PaintFetch from "@/components/DataFetch/PaintFetch/PaintFetch";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";

const Paint = () => {
  return (
    <main>
      <Section>
        <PaintFetch />
      </Section>
      <Footer />
    </main>
  );
};

export default Paint;
