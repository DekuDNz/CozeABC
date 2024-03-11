import React from "react";
import "./Nav.css";
import { Input, Box, Flex } from "@chakra-ui/react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <Flex
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          borderBottom: "2px solid #f3f3f3",
          zIndex: 9,
        }}
      >
        <Box className="nav-container">
          <Input
            type="text"
            className="search-input"
            placeholder="Enter your search"
          ></Input>
        </Box>
        <Flex gap={"20px"} color="#494949" className="profile-container">
          <a href="#">
            <FaHeart className="nav-icons" />
          </a>
          <a href="#">
            <FaShoppingCart className="nav-icons" />
          </a>

          <a href="#">
            <FaUser className="nav-icons" />
          </a>
        </Flex>
      </Flex>
    </>
  );
};

export default Nav;
