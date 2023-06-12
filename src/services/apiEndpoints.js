import axios from "axios"

const authUrl='http://localhost:4000/auth'
const productUrl='http://localhost:4000/product'
const categoryUrl='http://localhost:4000/category'


export const getPhoto=(id)=>{
    return productUrl+`/product-photo/${id}`
}
export const deleteCategory=(id)=>{
    return axios.delete(categoryUrl+`/delete-category/${id}`)
}
export const getCategory=()=>{
    return axios.get(categoryUrl+"/get-category");
}
export const getAllProducts=(page)=>{
    return axios.get(productUrl+`/product-list/${page}`);
}
export const getProduct=(slug)=>{
    return axios.get(productUrl+`/product-category/${slug}`)
}
export const createProduct=(productData)=>{
    return axios.post(productUrl+"/create-product",productData);
}

//register user or admin
export const register=(data)=>{
    return axios.post(authUrl+"/signup",data);
}
export const login=(data)=>{
    return axios.post(authUrl+"/login",data);
}
export const forgetPassword=(data)=>{
    return axios.post(authUrl+"/forgot-password",data);
}


//route auth to validate user or admin
export const isUser=()=>{
    return axios.get(authUrl+"user-auth");
}
export const isAdmin=()=>{
    return axios.get(authUrl+"admin-auth");
}

//homepage endpoints

