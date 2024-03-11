import React from "react";
import "./Price.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import Input from "../../Component/Input";
const Price = (props) => {
  const { handleChange } = props;
  return (
    <>
      <Box mb={"30px"} mr={"20px"}>
        <Text
          style={{
            fontSize: "22px",
            fontWeight: "normal",
            marginBottom: "20px",
          }}
        >
          Price
        </Text>
        <Flex flexDirection={"column"} mr={"30px"}>
          <label className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test2"
            ></input>
            <span className="checkmark">All</span>
          </label>
          <Input
            handleChange={handleChange}
            value={50}
            title="$0-50"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={100}
            title="$50-100"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={150}
            title="$100-150"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Price;
