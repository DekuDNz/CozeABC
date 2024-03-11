import React from "react";
import "./Recommend.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Recommend = () => {
  return (
    <>
      <Box>
        <Text ml={"20rem"} mt={"20px"} fontWeight={"800"} fontSize={"20px"}>
          Recommended
        </Text>
        <Flex mt={"20px"} ml={"20rem"} gap={3} className="recommended-btns">
          <Button className="recommended-btn" colorScheme="teal" size="sm">
            All Products
          </Button>
          <Button className="recommended-btn" colorScheme="teal" size="sm">
            Nike
          </Button>
          <Button className="recommended-btn" colorScheme="teal" size="sm">
            Adidas
          </Button>
          <Button className="recommended-btn" colorScheme="teal" size="sm">
            Puma
          </Button>
          <Button className="recommended-btn" colorScheme="teal" size="sm">
            Vans
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Recommend;
