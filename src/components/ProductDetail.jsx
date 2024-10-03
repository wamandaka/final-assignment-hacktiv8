import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../features/product/productSlice";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Mengambil semua produk
  }, [dispatch]);

  // Mencari produk berdasarkan ID
  const product = products.find((prod) => prod.id === parseInt(id));

  return (
    <>
      <Navbar />
      <div className="text-center my-14 px-4">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>{error}</p>}
        {product ? (
          <div className="product-detail">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <figure className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-56 lg:w-96 lg:h-96 rounded-lg"
              />
            </figure>
            <p>{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
