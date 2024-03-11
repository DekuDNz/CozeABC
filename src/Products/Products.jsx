import React from "react";
import "./Product.css";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import Card from "../Component/Card";
const Products = (props) => {
  const { products } = props;
  return (
    <>
      <Grid
        gap={1}
        className="card-container"
        templateColumns="repeat(5, 1fr)"
      ></Grid>
    </>
  );
};

export default Products;
