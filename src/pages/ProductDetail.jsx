import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import Navbar from "../components/Navbar";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth); // Check if the user is logged in
  const { products, status, error } = useSelector((state) => state.products);
  const carts = useSelector((state) => state.cart.products);
  const [quantity, setQuantity] = useState(1);
  console.log(carts);

  useEffect(() => {
    dispatch(fetchProducts()); // Mengambil semua produk
  }, [dispatch]);

  const handleAddToCart = () => {
    if (!token) {
      // If the user is not logged in, redirect to login page
      navigate("/login");
    } else {
      // Otherwise, proceed to add the product to cart
      dispatch(addToCart({ ...product, quantity: quantity })); // Assume addToCart action exists
    }
  };

  const convertToRupiah = (dollar) => {
    const exchangeRate = 15000; // Nilai tukar USD ke IDR
    return (dollar * exchangeRate).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Mencari produk berdasarkan ID
  const product = products.find((prod) => prod.id === parseInt(id));

  return (
    <>
      <div className="text-center px-4 md:px-7">
        {status === "loading" && (
          <p className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </p>
        )}
        {status === "failed" && <p>{error}</p>}
        {product ? (
          <div className="product-detail text-start grid md:grid-cols-2 md:gap-5 md:mt-10 lg:mt-20 lg:gap-0">
            <figure className="flex justify-center w-full">
              <img
                src={product.image}
                alt={product.title}
                className="h-[400px] lg:w-96 lg:h-96 rounded-lg w-full"
              />
            </figure>
            <div className="md:relative space-y-5">
              <h1 className="text-3xl font-bold text-start line-clamp-1 my-3 md:text-4xl lg:line-clamp-2">
                {product.title}
              </h1>
              <p className="md:text-xl">{product.description}</p>
              <p className="text-xl font-bold my-2 md:text-2xl">
                {convertToRupiah(product.price)}
              </p>

              <div className="flex space-x-3 items-center">
                <button onClick={handleMinusQuantity} className="btn">
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={handlePlusQuantity} className="btn">
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn btn-secondary mt-2 md:mt-5 md:btn-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
