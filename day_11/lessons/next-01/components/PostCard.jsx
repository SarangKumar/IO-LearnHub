import Link from "next/link";
import React from "react";



const PostCard =  ({ id, title, body }) => {

  return (
    <div className="rounded border border-slate-900/50 flex gap-y-2 flex-col shadow hover:shadow-md p-2 my-4">
      <h2 className="text-xl font-bold mb-1">
        #{id} {title}
      </h2>
      <p className="text-xs text-slate-900">{body}</p>
      <Link className="text-white self-start font-semibold text-xs px-3 py-1 bg-slate-900 shadow-md rounded" href={`/posts/${id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
