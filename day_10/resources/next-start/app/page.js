import Add from "./components/Add";

async function getData(url) {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Home = async () => {
  const comments = await getData("http://localhost:3000/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "user3"}),
  });
  // console.log(comments);
  // console.log("comments");

  return (
    <div>
      <h1>Home</h1>
      <section>
        {comments.map((comment) => (
          <CommentBox {...comment} key={comment.id} />
        ))}
      </section>
      <Add />
    </div>
  );
};

export default Home;

const CommentBox = ({ username, title, desc, likes }) => {
  return (
    <div className="">
      <h1>{username}</h1>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{likes}</p>
    </div>
  );
};
