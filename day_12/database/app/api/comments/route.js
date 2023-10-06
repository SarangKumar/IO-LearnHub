import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  // have connection
  // logic to get the data from db

  try {
    const allComments = await prisma.comment.findMany();
    return NextResponse.json(allComments, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body);

    if (!body.name || !body.comment) {
      return NextResponse.json({ message: "Missing value" }, { status: 422 });
    }

    prisma.$connect();
    const newComment = await prisma.comment.create({
      data: {
        name: body.name,
        comment: body.comment,
      },
    });

    // logic to post the data to db
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
