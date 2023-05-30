import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="border p-2 ">
  
          <input
            type="text"
            className="p-2 text-slate-600 font-semibold  border-2 rounded-md mb-2 min-w-[300px]"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          /> <br />
        

        <button type="submit" className="px-2 py-1 bg-green-600 rounded-md text-white font-semibold">
          Create
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
