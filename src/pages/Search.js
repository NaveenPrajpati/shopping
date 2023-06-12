import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { getPhoto } from "../services/apiEndpoints";
import ProductCard from "../components/ProductCard";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <ProductCard key={p._id} photo={getPhoto(p._id)} name={p.name} slug={p.slug} desc={p.description} price={p.price}/>
           
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
