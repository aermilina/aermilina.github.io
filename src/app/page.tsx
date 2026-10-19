import { SiteHeader } from './components/site-header';
import { Hero } from './components/hero';
import { Expertise } from './components/expertise';
import { CaseStudies } from './components/case-studies';
import { Contact } from './components/contact';
import { Experience } from './components/experience';
import { SiteFooter } from './components/site-footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] text-[#111111]">
      <SiteHeader />
      <Hero />
      <Expertise />
      <Experience />
      <CaseStudies />
      <Contact />
      <SiteFooter />
    </main>
  );
}
