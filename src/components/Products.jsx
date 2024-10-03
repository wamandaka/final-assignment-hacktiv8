import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, status, error } = useSelector((state) => state.products); // Mengakses langsung dari state
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts()); // Trigger fetch jika status masih 'idle'
    }
  }, [status, dispatch]);

  // Fungsi untuk konversi dari dolar ke rupiah
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
        <h1 className="text-3xl font-bold mb-3">Our Products</h1>
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

      <div className="px-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-8 text-center mb-20">
        {/* Dalam map produk */}
        {status === "succeeded" && products.length > 0
          ? products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                {" "}
                {/* Link ke detail produk */}
                <div className="card card-compact bg-base-100 shadow-xl text-start">
                  <figure>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-56 lg:w-96 lg:h-96"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title line-clamp-1">{product.title}</h2>
                    <p>${product.price}</p>
                    <div className="card-actions justify-end">
                      {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : status === "succeeded" && <p>No products found.</p>}
      </div>
    </div>
  );
};

export default Products;
