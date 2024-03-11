import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommend from "./Recommend/Recommend";
import Sidebar from "./SideBar/Sidebar";
import products from "./Data/data";
import Card from "./Component/Card";
const MainProject = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // Radio filtered
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredData = filteredItems;
    }

    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => {
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />;
      }
    );
  }
  const result = filteredData(products, selectedCategory, query);
  console.log("check result", result);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommend handleClick={handleClick} />
      <Products products={products} />
    </>
  );
};

export default MainProject;
