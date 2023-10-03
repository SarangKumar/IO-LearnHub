"use client";
import React, { useRef, useState } from "react";

const Home = () => {
	const inputRef = useRef(null);
  const [loading, setLoading] = useState(false)

	const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('Getting response from API')
		const response = await fetch("/api/openai", {
      method: "POST",
			headers: {
        "Content-Type": "application/json",
			},
			body: JSON.stringify({ query: inputRef.current.value }),
		});
    const data= await response.json()
    console.log(data)
    setLoading(false)
	};
	return (
		<div className="flex items-center justify-center py-20">
			<form
				onSubmit={(e)=>handleSubmit(e)}
				className="w-full sm:w-3/4 md:w-1/2 flex justify-center gap-x-3 items-center"
			>
				<input
					ref={inputRef}
					type="text"
					className="rounded border focus:border-teal-500 px-3 py-2 flex-1 flex-grow"
				/>
				<button
					type="submit"
					className="text-white px-3 py-2 rounded bg-teal-500 focus:ring focus:ring-teal-600 focus:ring-offset-1"
				>
          {loading ? 'Loading...' : 'Submit'}
					{/* Submit */}
				</button>
			</form>
		</div>
	);
};

export default Home;
