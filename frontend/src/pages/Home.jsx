import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import "./Home.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart-slice";
const Home = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  async function fetchAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    console.log(result);
    setProducts(result);
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);

  //   function addProductToCart(product) {
  //     console.log("hi");
  //     //dispatch action
  //     dispatch(addToCart({ product, quantity: 1 }));
  //   }
  const addProductToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <div className="products-listing">
      {products.map((item) => {
        const { id, title, description, image, price } = item;

        return (
          <div className="products-card" key={id}>
            <div className="products">
              {/* <Link to={`/${name}-${id}`}> */}
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} />

                <p>{title.substring()}</p>
                <p>From ₹ {price}</p>
              </Link>
              <button
                onClick={() =>
                  addProductToCart({
                    id,
                    title,
                    description,
                    image,
                    price,
                  })
                }
              >
                Add to cart
              </button>
              <AiOutlineHeart size={"2rem"} id="wishlist" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
