import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import New from "./../../common/image/new.jpg";
import "./../../common/service.css";

// Placeholder array for products
const initialProducts = [
  {
    name: "Product 1",
    price: 20,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  {
    name: "Product 2",
    price: 30,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  {
    name: "Product 3",
    price: 40,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  {
    name: "Product 4",
    price: 50,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  {
    name: "Product 5",
    price: 60,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  {
    name: "Product 6",
    price: 30,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  {
    name: "Product 7",
    price: 70,
    inventoryStatus:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint totam quod perspiciatis placeat reiciendis. Iure deleniti obcaecati ratione dolorem quidem animi eius. Natus vero tenetur quia assumenda officia reprehenderit amet earum ut suscipit nam.",
    image: New,
  },
  // Add more produts as needd
];

// Placeholder ProductService with a getProducts method
const ProductService = {
  getProductsSmall: () => {
    return Promise.resolve(initialProducts);
  },
};

export default function CircularDemo() {
  const [products, setProducts] = useState([]);

  const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];
  useEffect(() => {
    // Fetch products from the service when the component mounts
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <>
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 mb-3">
          <div className="mb-3">
            <img
              src={product.image}
              alt={product.name}
              width={"200px"}
              className=" shadow-2"
            />
          </div>
          <div>
            <h4 className="mb-1">{product.name}</h4>
           <p style={{color:"gray", textAlign:"justify"}} >{product.inventoryStatus}</p>
           
           
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="headingservice">
        <h1>
          Powerful <span>And</span> Intuitive
        </h1>
      </div>
      <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    </>
  );
}
