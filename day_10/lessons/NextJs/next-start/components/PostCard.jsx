import Link from "next/link";
import React from "react";



const PostCard =  ({ id, title, body }) => {

  return (
    <div className="rounded shadow-sm hover:shadow p-2 m-2">
      <h2 className="text-xl font-bold mb-1">
        #{id} {title}
      </h2>
      <p className="text-sm text-slate-900">{body}</p>
      <Link className="text-white text-xs px-3 py-1 shadow my-2 bg-slate-900 rounded" href={`/posts/${id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
