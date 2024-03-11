import React from "react";
import "./Colors.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import Input from "../../Component/Input";
const Colors = (props) => {
  const { handleChange } = props;
  return (
    <>
      <Box mb={"30px"} mr={"40px"}>
        <Text
          style={{
            fontSize: "22px",
            fontWeight: "normal",
            marginBottom: "20px",
          }}
          className="sidebar-title color-title"
        >
          Color
        </Text>
        <Flex flexDirection={"column"}>
          <label className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test1"
            ></input>
            <span className="checkmark all"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="red"
            title="Red"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test1"
          />
          <Input
            handleChange={handleChange}
            value="white"
            title="White"
            name="test1"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Colors;
