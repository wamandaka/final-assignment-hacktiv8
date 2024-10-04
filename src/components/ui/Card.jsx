import React from 'react'

const Card = ({ product, convertToRupiah}) => {
  return (
    <div>
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
          <p>{convertToRupiah(product.price)}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card