import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import { getAllProducts, getCategory, getPhoto } from "../services/apiEndpoints";
import { bannerData } from "../constants/homePageConst/homeitems";
import DealofDay from "../components/hompageComp/HomeDeals";
import Footer from "../components/Layout/Footer";


const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await getCategory()
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //get products
  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await getAllProducts(page)
      setLoading(false);

      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://localhost:4000/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProduct();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* banner image */}
      <img
        src="/images/banner.jpg"
        className=" h-[300px] w-full"
        alt="bannerimage"
        
      />
      <div className=" bg-slate-100">
  {/* first strip div   */}
 <div className=" bg-yellow-200 flex flex-wrap items-center justify-center gap-5 p-2">
 {bannerData.map((item)=>(
  <div className="flex gap-2 items-center">
    {item.icon}
    <div className="">
      <p className="m-0 font-semibold">{item.title}</p>
      <p className="m-0 font-semibold">{item.Description}</p>
    </div>
  </div>
 ))

 }
 </div>
        
{/* all product */}
        <div className="w-full ">
          <h1 className="text-center text-2xl">Deals</h1>
          <DealofDay/>
          {/* <div className="flex flex-wrap">
            {products?.map((p) => (
           
              <ProductCard key={p._id} photo={getPhoto(p._id)} name={p.name} slug={p.slug} desc={p.description} price={p.price}/>
            
            ))}
          </div> */}


     
<Footer></Footer>

        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
