import axios from "axios"

const authUrl='http://localhost:4000/api/v1/auth'
const productUrl='http://localhost:4000/api/v1/product'
const categoryUrl='http://localhost:4000/api/v1/category'


export const getPhoto=(id)=>{
    return productUrl+`/product-photo/${id}`
}
export const deleteCategory=(id)=>{
    return axios.delete(categoryUrl+`/delete-category/${id}`)
}
export const getCategory=(id)=>{
    return axios.get(categoryUrl+"/get-category");
}
export const getProduct=(slug)=>{
    return axios.get(productUrl+`/product-category/${slug}`)
}
export const createProduct=(productData)=>{
    return axios.post(productUrl+"/create-product",productData);
}
