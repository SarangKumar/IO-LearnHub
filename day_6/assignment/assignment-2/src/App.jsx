import React from "react";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
  return (
    <main className="">
      <Search />
      <Hero />
      <section className="flex flex-wrap gap-8 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default App;
