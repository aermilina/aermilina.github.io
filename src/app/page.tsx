import Head from "next/head";
import styles from "../styles/Home.module.css";
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