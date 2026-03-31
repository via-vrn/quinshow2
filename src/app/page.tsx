"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatorsSection from "@/components/AnimatorsSection";
import ProgramSection from "@/components/ProgramSection";
import PackagesSection from "@/components/PackagesSection";
import QuizSection from "@/components/QuizSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowsSection from "@/components/ShowsSection";
import QuestSection from "@/components/QuestSection";
import VideoSection from "@/components/VideoSection";
import ContactForm from "@/components/ContactForm";
import AdditionsSection from "@/components/AdditionsSection";
import GallerySection from "@/components/GallerySection";
import Marquee from "@/components/Marquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import BenefitsSection from "@/components/BenefitsSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <ScrollAnimation animation="fade-up">
        <AnimatorsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={100}>
        <ProgramSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <PackagesSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-left">
        <QuizSection />
      </ScrollAnimation>

      <ScrollAnimation animation="scale">
        <FeaturesSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <ShowsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-right">
        <QuestSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <VideoSection />
      </ScrollAnimation>

      <ScrollAnimation animation="scale">
        <ContactForm />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <AdditionsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <GallerySection />
      </ScrollAnimation>

      <Marquee />

      <ScrollAnimation animation="fade-up">
        <TestimonialsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-left">
        <TeamSection />
      </ScrollAnimation>

      <ScrollAnimation animation="scale">
        <BenefitsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <LocationsSection />
      </ScrollAnimation>

      <Footer />
    </main>
  );
}
