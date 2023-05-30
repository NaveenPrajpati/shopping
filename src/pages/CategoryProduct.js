import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import { getPhoto, getProduct } from "../services/apiEndpoints";
import ProductCard from "../components/ProductCard";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await getProduct(params.slug)
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="mt-2 mx-10">
        <h4 className="text-center">Category -{category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
       
            <div className="flex gap-3 flex-wrap">
              {products?.map((p) => (
                    <ProductCard key={p._id} photo={getPhoto(p._id)} name={p.name} slug={p.slug} desc={p.description} price={p.price}/>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
        
       
      </div>
    </Layout>
  );
};

export default CategoryProduct;
