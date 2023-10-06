import Form from "./Form";

export default async function Home() {

  async function getData() {
    const res = await fetch("/api/comments");
    const data = await res.json();
    console.log(data);
    // return res.json();

  }
  getData();


  // const comments = await getData()
  // console.log(comments)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
    </main>
  );
}
