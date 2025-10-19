import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Hero/Banner";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div>
      <section>
        <Banner/>
      </section>
      <section className="py-16">
        <AboutUs/>
      </section>
      <section>
        <Skills/>
      </section>
      <section className="py-16">
        <Projects/>
      </section>
    </div>
  );
}
