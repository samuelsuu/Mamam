import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/Mask.png";
import img2 from "../assets/Group3.png";
import img3 from "../assets/Group4.png";

function Hero() {
  return (
    <Box p={["20px", "30px 40px 10px 80px"]}>
      <Flex
        direction={["column", "row"]}
        justifyContent={["center", "space-between"]}
        alignItems={"flex-start"}
        gap={[6, 130]}
        marginRight={[0, 100]}
        textAlign={["center", "left"]}
      >
        <Box>
          <Box
            bg={"#FFECE8"}
            w={["100%", "306px"]}
            textAlign={"center"}
            py={"11px"}
            borderRadius={"35px"}
            fontSize={"20px"}
            fontWeight={400}
            mb={[4, 0]}
          >
            #1 Food Delivery Service
          </Box>
          <Text fontWeight={600} fontSize={["32px", "48px"]} my={10}>
            Taste the best food <br /> it's on-time delivery <br /> with us
          </Text>
          <Text fontSize={["16px", "20px"]} fontWeight={400} mb={10}>
            Best cooks and best delivery guys are all at<br /> your service. Call us,
            we’ll be there.
          </Text>
          <Flex
            gap={[4, 10]}
            justifyContent={["center", "flex-start"]}
            my={10}
          >
            <img src={img2} alt="Feature 1" />
            <img src={img3} alt="Feature 2" />
          </Flex>
        </Box>
        <Box h={["auto", "452px"]} w={["100%", "auto"]} textAlign={"center"}>
          <img src={img1} alt="Main Feature" style={{ maxWidth: "100%" }} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;
