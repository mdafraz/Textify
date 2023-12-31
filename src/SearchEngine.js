import { useState } from "react";

function SearchEngine({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="pt-4">
      <form
        onSubmit={handleOnSubmit}
        className="max-w-md mx-auto bg-white shadow-md border rounded-md  border border-slate-300"
      >
        <div className="relative flex items-center w-full h-12">
          <input
            value={term}
            onChange={handleOnChange}
            placeholder="search something..."
            className=" placeholder:italic block border border-slate-300 rounded-md h-full w-full text-sm text-gray-700 pr-2 pl-5"
          />
        </div>
      </form>
    </div>
  );
}
export default SearchEngine;

// search Engine Id : 7443ad9f6fd8a4a81
//api key:  AIzaSyBxPdwMUqf5UuHIQSYorHVJWZPYwWEzTuU
