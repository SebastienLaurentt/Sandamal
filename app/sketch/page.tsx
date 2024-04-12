import BackToTop from "@/components/BackToTop/BackToTop";
import SketchFetch from "@/components/DataFetch/SketchFetch/SketchFetch";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";

const Sketch = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <SketchFetch />
      </Section>
      <BackToTop />
    </main>
  );
};

export default Sketch;
