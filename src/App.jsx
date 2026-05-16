import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TheLegend from "./components/TheLegend";
import WhyDirtySancho from "./components/WhyDirtySancho";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import TickerBanner from "./components/TickerBanner";
import Community from "./components/Community";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#062B1F",
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <TheLegend />
        <TickerBanner />
        <WhyDirtySancho />
        <TickerBanner />
        <Tokenomics />
        <TickerBanner />
        <Roadmap />
        <TickerBanner />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
