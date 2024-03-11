import React from "react";
import "./Category.css";
import Input from "../../Component/Input";
import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
const Category = (props) => {
  const { handleChange } = props;
  return (
    <>
      <Box mb={"30px"}>
        <Text
          style={{
            fontSize: "22px",
            fontWeight: "normal",
            marginBottom: "20px",
          }}
        >
          Category
        </Text>
        <Flex flexDirection={"column"}>
          <label className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test"
            ></input>
            <span className="checkmark">All</span>
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="falts"
            title="Falts"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Category;
