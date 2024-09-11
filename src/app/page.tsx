
import ContainerBlock from "./components/ContainerBlock";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <ContainerBlock>
      <Hero/>
      <Projects/>
    </ContainerBlock>
  );
}