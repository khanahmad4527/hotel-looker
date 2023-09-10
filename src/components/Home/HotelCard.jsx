import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotelCard = ({ hotel }) => {
  const toast = useToast();

  const carouselSettings = {
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Card maxW="sm" margin={"auto"}>
      <CardBody>
        <Image
          height={"180px"}
          width={"200px"}
          objectFit={"contain"}
          src={hotel?.images[0]}
          alt={hotel?.name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{hotel?.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${hotel?.price}
          </Text>
          <Rating rating={hotel?.start} numReviews={hotel?.rating} />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() =>
              toast({
                title: "Booking Confirm.",
                description: "Your booking has been confirmed",
                status: "success",
                position: "top",
                duration: 2000,
                isClosable: true,
              })
            }
          >
            Book now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center" color={"yellow.500"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" fontSize="sm" color="blue.600">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}
