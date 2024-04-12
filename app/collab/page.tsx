import BackToTop from "@/components/BackToTop/BackToTop";
import CollabFetch from "@/components/DataFetch/CollabFetch/CollabFetch";
import Section from "@/components/Section/Section";

const Collab = () => {
  return (
    <main>
      <Section marginTop={true} marginBottom={true}>
        <CollabFetch />
      </Section>
      <BackToTop />
    </main>
  );
};

export default Collab;
