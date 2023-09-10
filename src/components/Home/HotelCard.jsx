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
import styles from "./HotelCard.module.css";
import { useNavigate } from "react-router-dom/dist";

const HotelCard = ({ hotel, index: hotelID }) => {
  const toast = useToast();
  const navigate = useNavigate();

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Card className={styles.cardContainer} margin={"auto"}>
      <CardBody>
        <Slider
          {...carouselSettings}
          style={{
            margin: "auto",
          }}
        >
          {hotel?.images?.map((image, index) => {
            return (
              <Box
                key={index}
                cursor="pointer"
                onClick={() => navigate(`/hotel/${hotelID}`)}
              >
                <Image
                  width={"100%"}
                  height={"200px"}
                  objectFit={"contain"}
                  src={image}
                  alt={hotel?.name}
                  borderRadius="lg"
                  margin={"auto"}
                />
              </Box>
            );
          })}
        </Slider>

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
