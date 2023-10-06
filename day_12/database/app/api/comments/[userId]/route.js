import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // console.log(res)
  try {
    const { userId } = res.params;
    console.log(userId);

    prisma.$connect();
    const comment = await prisma.comment.findUnique({
      where: { id: userId },
    });

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error(
      { error: "Something went wrong" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req, res) {
  try {
    const { userId } = res.params;
    console.log(userId);

    const deletedComment = await prisma.comment.delete({ where: { id: userId } });

    return NextResponse.json(deletedComment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error(
      { error: "Something went wrong" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
export async function PATCH() {
  return NextResponse.json({ method: "PATCH dynamically" });
}
