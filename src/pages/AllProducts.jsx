import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios';
import { useCart } from '../context/cart';
import { useNavigate } from 'react-router-dom';
import { getPhoto } from '../services/apiEndpoints';
import { AiOutlineReload } from 'react-icons/ai';
import Footer from '../components/Layout/Footer';
import Layout from '../components/Layout/Layout';

export default function AllProducts() {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  


    useEffect(() => {
        // if (page === 1) return;
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
  return (
    <Layout title={'All Products'}>
    <div>
        <div className="flex flex-wrap">
            {products?.map((p) => (
           
              <ProductCard key={p._id} photo={getPhoto(p._id)} name={p.name} slug={p.slug} desc={p.description} price={p.price}/>
            
            ))}
          </div>

          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="flex text-green-800 gap-1 font-bold items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
          <Footer/>
    </div>
    </Layout>
  )
}
