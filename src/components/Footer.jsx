import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Stacks vertically on small screens, horizontally on larger screens
      bg={"#FF4213"}
      color={"#ffffff"}
      p={{ base: "20px", md: "30px 40px 10px 80px" }} // Adjust padding for mobile
      alignItems={"center"}
      justifyContent={"center"}
      gap={6}
    >
      <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 6, md: 0 }}>
        <Text
          color={"#000000"}
          fontWeight={400}
          fontSize={"16px"}
          bg={"#FCFCFC"}
          p={"7px 29px"}
          w={"182px"}
          textAlign={"center"}
          borderRadius={"14px"}
          mb={4}
        >
          Lot of Discounts
        </Text>
        <Text fontSize={{ base: "24px", md: "39px" }} fontWeight={600}>
          Get lots of discounts and <br />free shipping here
        </Text>
      </Box>

      <Box
        bg={"#000000"}
        h={{ base: "auto", md: "210px" }} // Adjust height for mobile
        w={{ base: "100%", md: "475px" }} // Adjust width for mobile
        p={4}
        borderRadius={"10px"}
      >
        <Flex direction={{ base: "column", md: "row" }} alignItems={"center"} gap={4}>
          <Box textAlign={{ base: "center", md: "left" }} flex="1">
            <Text fontSize={{ base: "20px", md: "25px" }} fontWeight={600}>
              Get Discount 44%
            </Text>
            <Text fontSize={{ base: "14px", md: "20px" }} fontWeight={400}>
              Just for new users
            </Text>
          </Box>
          <Box
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight={400}
            color={"#000000"}
            bg={"#ffffff"}
            p={2}
            borderRadius={"26px"}
            textAlign={"center"}
            flex="1"
          >
            <button style={{ background: 'none', border: 'none', color: '#000', cursor: 'pointer' }}>Get it now</button>
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight={400}
          mt={4}
        >
          <Text>Until 27 Apr 2022</Text>
          <Text>Terms & conditions</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Footer;
