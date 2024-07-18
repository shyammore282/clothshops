import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/slice/cartSlice";

const ProductCard = () => {
  // dispatching the data from store
  const Dispatch = useDispatch();
  //state to hold the api data
  const [product, setProduct] = useState([]);
  // Api fatch
  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data)
      .then((finalres) => {
        setProduct(finalres);
        console.log(finalres);
      });
  };
  // Render a data at onces when page referece
  useEffect(() => {
    getProduct();
  }, []);

  // add to cart event
  const onAddToCart = (value) => {
    // dispatch an add action
    Dispatch(addCart(value));
  };
  return (
    <>
      <section className=" my-5 py-2">
        {/*----grid or disolay data--- */}
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {product.map((items, index) => {
            return (
              <div
                className=" bg-slate-50 border-2 rounded-xl  hover:cursor-pointer"
                key={index}
              >
                {/*---img of card--- */}
                <div className=" p-4">
                  <img
                    className=" items-center h-[180px] mx-auto"
                    src={items.image}
                    alt={items.title}
                  />
                </div>
                <div className=" p-4">
                  <p className=" text-balance">{items.description}</p>
                </div>
                <div className=" p-2">
                  <h2 className=" text-xl font-semibold text-center p-2">
                    {items.title}
                  </h2>
                </div>
                <p className="text-xl font-semibold text-center p-2">
                  INR :{items.price}
                </p>
                <div className=" text-center my-5">
                  <button
                    className=" bg-blue-700 rounded-lg px-4 py-1 text-white"
                    onClick={() => onAddToCart(items)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductCard;
