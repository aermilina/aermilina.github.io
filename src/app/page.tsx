import ContainerBlock from './components/ContainerBlock';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Credentials from './components/Credentials';

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <Expertise />
      <Projects />
      <Credentials />
    </ContainerBlock>
  );
}
