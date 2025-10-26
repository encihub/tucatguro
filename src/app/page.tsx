'use client';

import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Ethos } from '@/components/site/Ethos';
import { Service } from '@/components/site/Service';
import { Prices } from '@/components/site/Prices';
import { Contact } from '@/components/site/Contact';
import { FAQ } from '@/components/site/FAQ';

export default () => {
  return (
    <div className="bg-linear-to-b from-accent/20 via-background to-background">
      <Hero />
      <About />
      <Ethos />
      <Service />
      <Prices />
      <Contact />
      <FAQ />
    </div>
  );
};
