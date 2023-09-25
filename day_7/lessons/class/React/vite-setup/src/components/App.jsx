import Card from "./Card";

export default function App() {
  return (
    <div className="flex flex-wrap gap-8 p-8">
      <Card title="lorem 1" desc="desc blah blah"/>
      <Card title="lorem 2" desc="desc blah blah"/>
      <Card title="lorem 3" desc="desc blah blah"/>
      <Card title="lorem 4" desc="desc blah blah"/>
      

      <Footer />
    </div>
  );
}
