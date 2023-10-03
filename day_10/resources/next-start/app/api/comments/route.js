import { NextResponse } from "next/server";

const comments = [
  {
    id: 1,
    title: "This is a comment",
    username: "user1",
    desc: "lorem lorem lorem",
    likes: 5,
  },
  {
    id: 1,
    title: "This is a comment",
    username: "user1",
    desc: "lorem lorem lorem",
    likes: 5,
  },
];
export const GET = () => {
  // logic to get the data from the database

  if (!comments)
    return NextResponse.json({ message: "GET error" }, { status: 500 });
  return NextResponse.json(comments);
};

export const POST = async (req, res) => {
  // logic to add the data to the database
  const body = await req.json();
  // console.log(res, res)
  console.log(body)
  // const newComment = {
  //   id: 3,
  //   title: "new comment",
  //   desc: "new comment desc",
  //   likes: 0,
  //   username: "user3",
  // };
  // comments.push(newComment);
  console.log('post is running')
  return NextResponse.json(comments);
};
