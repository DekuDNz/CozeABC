import React from "react";
import "./Sidebar.css";
import { Box, Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Colors/Colors";

const Sidebar = (props) => {
  const { handleChange } = props;
  return (
    <>
      <Flex
        className="sidebar"
        style={{
          width: "15%",
          position: "fixed",
          height: "100%",
          borderRight: "2px solid #e5e5e5",
          zIndex: 3,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className="logo-container"
          style={{ fontSize: "25px", padding: "25px", marginBottom: "35px" }}
        >
          <FaShoppingCart />
        </Box>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </Flex>
    </>
  );
};

export default Sidebar;
