"use client";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ name, comment }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
        <h1 className="text-3xl font-bold">Form</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="text-sm rounded border shadow p-2"
        ></input>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter Comment"
          rows={8}
          className="text-sm rounded border shadow p-2"
        ></textarea>

        {loading ? (
          <button className="bg-slate-950 text-xs p-2 rounded text-white">
            Loading...
          </button>
        ) : (
          <button className="bg-slate-950 text-xs p-2 rounded text-white">
            Submit
          </button>
        )}
      </form>
      {/* {name}
      {comment} */}
    </div>
  );
};

export default Form;
