import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProductsByCategory } from "../features/product/productSlice"; // Pastikan ini sudah ada di slice
import Card from "../components/ui/Card";
import Navbar from "../components/Navbar";

const ProductsByCategory = () => {
  const { category } = useParams(); // Mengambil parameter kategori dari URL
  const dispatch = useDispatch();

  const { products, status, error } = useSelector((state) => state.products); // Mengambil data dari state Redux

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category)); // Memanggil thunk untuk fetch produk berdasarkan kategori
    }
  }, [category, dispatch]); // Hanya dijalankan ulang jika kategori berubah

  const convertToRupiah = (dollar) => {
    const exchangeRate = 15000; // Nilai tukar USD ke IDR
    return (dollar * exchangeRate).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div>
      <div className="text-center my-14">
        <h1 className="text-3xl font-bold mb-3 uppercase">{category}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, soluta?
        </p>
      </div>
      {status === "loading" && (
        <p className="text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </p>
      )}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && products.length > 0 && (
        <div>
          <ul>
            <div className="px-4 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-8 text-center mb-20">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Card product={product} convertToRupiah={convertToRupiah} />
                </Link>
              ))}
            </div>
          </ul>
        </div>
      )}
      {status === "succeeded" && products.length === 0 && (
        <p>No products found for category {category}.</p>
      )}
    </div>
  );
};

export default ProductsByCategory;
