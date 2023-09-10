import React from "react";
import { Box, Flex, Text, Square, Circle, Center } from "@chakra-ui/react";

const ReviewCard = ({ user }) => {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" m="4">
      <Flex alignItems="center">
        <Circle w={"35px"} h={"35px"} p={"20px"} bg="teal.500" color="white">
          <Center>{user?.username[0]}</Center>
        </Circle>
        <Box ml="4">
          <Text fontSize="lg" fontWeight="bold">
            {user?.username}
          </Text>
          <Text fontSize="sm">{formatDate(user?.date)}</Text>
        </Box>
        <Box ml="auto">
          <Square
            bg="#032541"
            color={"white"}
            width={"15px"}
            height={"15px"}
            p={"20px"}
            borderRadius={"10px 10px 10px 0px"}
          >
            <Center>{user?.rating}</Center>
          </Square>
        </Box>
      </Flex>
      <Text mt="4">{user?.review}</Text>
    </Box>
  );
};

export default ReviewCard;
