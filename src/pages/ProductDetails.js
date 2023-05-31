import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";
import { toast } from "react-hot-toast";
import ProductCard from "../components/ProductCard";
import { getPhoto } from "../services/apiEndpoints";
import ButtonCommon from "../components/Layout/ButtonCommon";

const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-around gap-4 max-h-[500px] mt-10">
        <div className="">
          <img
            src={`http://localhost:4000/api/v1/product/product-photo/${product._id}`}
            className=""
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="bg-gray-300 p-2 rounded-lg min-w-[400px] min-h-[300px]">
          <h1 className="decoration-wave ring-2">Product Details</h1>
          
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
                  <ButtonCommon color={'bg-blue-500'} text={'ADD TO CART'} onClick={() => {
                    setCart([...cart, product]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, product])
                    );
                    toast.success("Item Added to cart");
                  }}/>
        </div>
      </div>
  
      <div className=" mt-10">
        
      <h4>Similar Products ➡️</h4>
        {relatedProducts.length <=0?(
          <p className="text-center">No Similar Products found</p>
        ):
        <div className="flex flex-wrap mx-10">
          {relatedProducts?.map((p,index) => (
            <ProductCard key={index} photo={getPhoto(p._id)} price={p.price} name={p.name} desc={p.description}/>
          ))}
        </div>}
      </div>
    </Layout>
  );
};

export default ProductDetails;
