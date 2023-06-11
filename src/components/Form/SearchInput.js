import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
      <form
        className="flex border-2 border-teal-400 rounded-lg justify-center gap-1 sm:w-[500px]"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md p-1 w-[80%] outline-none font-semibold"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="p-2 rounded-md bg-black text-white" type="submit">
          Search
        </button>
      </form>
    
  );
};

export default SearchInput;
