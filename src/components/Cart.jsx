import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/slice/cartSlice";

const Cart = () => {
  // reading the data from store
  const cartItems = useSelector((state) => state.cart);
  // action perfomed
  const dispatch = useDispatch();
  // event of remove the item from cart
  const onRemoveCart = (id) => {
    // dispatch the data from store
    dispatch(removeCart(id));
  };
  return (
    <>
      <section className=" flex justify-center p-4 mt-12 ju">
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {cartItems.map((items, index) => {
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
                    onClick={() => onRemoveCart(items.id)}
                  >
                    Remove item
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

export default Cart;
