import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import ButtonCommon from '../../components/Layout/ButtonCommon'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { createProduct, getCategory } from "../../services/apiEndpoints";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState([]);
  const [tags, settags] = useState([]);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await getCategory()
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const [target, settarget] = useState()
  function handleImageChange(event) {

    const selectedFIles = [];
    let targetFiles = event.target.files;
    settarget(event.target.files)
    let targetFilesObject = [...targetFiles]
    targetFilesObject.map((file) => {
      selectedFIles.push(URL.createObjectURL(file))
    })
    setPhoto(selectedFIles)
  }



  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("category", category);
      productData.append("tags", tags);
      for (let i = 0; i < target.length; i++) {
        productData.append('photo', target[i]);
      }

      const { data } = await createProduct(productData)
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };


  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {

    setInputValue(event.target.value);

  };

  const handleChipAdd = () => {
    if (inputValue.trim() !== '') {
      settags([...tags, inputValue.trim()]);
      setInputValue('');

    }
  };

  const handleChipDelete = (chipToDelete) => () => {
    settags((tags) => tags.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="flex flex-col sm:flex-row mt-20 mx-10 gap-10">

        <div className="w-[300px]">
          <AdminMenu />
        </div>

        <div className="min-w-[300px] w-[500px] p-2 rounded-md bg-gray-300">
          <h1 className="text-blue-500">Create Product</h1>

          <div className="mx-auto w-75 ">
            <select
              className="p-2 border w-[300px] mb-2 rounded-md"
              onChange={(event) => {

                setCategory(event.target.value);
              }}
            >
              <option value="">choose catogery</option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>


            <label className="w-full p-2 mb-2 cursor-pointer border text-center rounded-md">
              Upload Photo
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleImageChange}
                hidden
                multiple
              />
            </label>

            <input
              type="text"
              value={name}
              placeholder="Add title"
              className="w-full p-2 rounded-md mb-2"
              onChange={(e) => setName(e.target.value)}
            />


            <textarea
              type="text"
              value={description}
              placeholder="description"
              className="w-full p-2 rounded-md mb-2"
              onChange={(e) => setDescription(e.target.value)}
            />



            <input
              type="number"
              value={price}
              placeholder="write a Price"
              className="w-full p-2 rounded-md mb-2"
              onChange={(e) => setPrice(e.target.value)}
            />


            <input
              type="number"
              value={quantity}
              placeholder="write a quantity"
              className="w-full p-2 rounded-md mb-2"
              onChange={(e) => setQuantity(e.target.value)}
            />



            <div className=" border w-full p-2 rounded-md mb-2 ">
              <input
                type="text"
                placeholder="Enter tags"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleChipAdd();
                  }
                }}
                className="p-1 my-2 outline-none bg-gray-300 border-b-2 placeholder-slate-500"
              />
              <div className="flex gap-1 flex-wrap">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="p-1 rounded-lg bg-slate-200 flex  items-center gap-1 font-semibold"
                  >{tag}<AiOutlineCloseCircle onClick={handleChipDelete(tag)} className="cursor-pointer" /></div>
                ))}
              </div>
            </div>




            <select

              showSearch
              className="p-2 border w-[300px] mb-2 rounded-md outline-none"
              onChange={(value) => {
                setShipping(value);
              }}
            >
              <option value="">Select Shipping</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>

            <div className="mb-3">
              <ButtonCommon text={'CREATE PRODUCT'} color={'bg-blue-500'} onClick={handleCreate} />
            </div>
          </div>
        </div>
        <div className=" p-2 flex flex-wrap">
          {photo && photo.map((it, index) =>

            <div key={index} className="text-center m-1 max-w-[300px] max-h-[300px]">
              <img
                src={it}
                alt="product_photo"
                height={"200px"}
                className=""
              />
              <p>{photo.name}</p>
            </div>
          )}

        </div>
      </div>

    </Layout>
  );
};

export default CreateProduct;
