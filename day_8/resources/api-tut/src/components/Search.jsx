const Search = () => {
  return (
    <section className="flex justify-center">
      <div className="focus-within:outline focus-within:outline-indigo-500 m-4 flex px-3 py-2 w-full md:w-1/2 bg-slate-100 rounded">
        <input
          type="text"
          autoFocus
          className="bg-transparent flex-grow focus:outline-none"
          placeholder="Enter post title"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Search;
