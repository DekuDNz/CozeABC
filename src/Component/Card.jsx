import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <Box className="card" w={"280px"}>
        <Image
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Shoe"
          className="card-img"
        />
        <Box className="card-details">
          <Text className="card-title">Shoe</Text>
          <Flex alignItems={"center"} className="card-reviews" mb={"1rem"}>
            <FaStar color="#d5ab55" />
            <FaStar color="#d5ab55" />
            <FaStar color="#d5ab55" />
            <FaStar color="#d5ab55" />
            <Text className="total-reviews" ml={"10px"} fontSize={"15px"}>
              4
            </Text>
          </Flex>
          <Flex className="card-price" justifyContent={"space-around"}>
            <Flex className="price" gap={"5px"}>
              <del>$300</del>
              <Text>200</Text>
            </Flex>
            <Box className="bag">
              <FaShoppingBag />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Card;
