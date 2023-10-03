"use client";

const Add = () => {
    const addData = async () => {
        const res = await fetch("http://localhost:3000/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: "user3"}),
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }
  return (
    <div>
      <button onClick={addData} className="border">Add</button>
    </div>
  );
};

export default Add;
