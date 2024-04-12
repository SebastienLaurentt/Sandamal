import SketchFetch from "@/components/DataFetch/SketchFetch/SketchFetch";
import Section from "@/components/Section/Section";

const Sketch = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <SketchFetch />
      </Section>
    </main>
  );
};

export default Sketch;
