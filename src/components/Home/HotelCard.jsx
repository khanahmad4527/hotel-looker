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
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HotelCard.module.css";
import ReviewCard from "./ReviewCard";

const HotelCard = ({ hotel }) => {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  const hotelReviews = [
    {
      username: "Hyunah",
      date: "02-24-2023",
      review:
        "The room was so clean and cozy, and the house manager was so kind. If I visit Freiburg next time, I will also stay at this hotel again.",
      rating: 9,
    },
    {
      username: "Deana",
      date: "09-07-2023",
      review: "Beautiful room.",
      rating: 8,
    },
    {
      username: "Muhip",
      date: "09-07-2023",
      review:
        "My room was in the guesthouse right on the street where people drink until late at night, so it wasn't quiet. It was also a bit awkward going in and out since the entrance is inside a courtyard of a restaurant.",
      rating: 6,
    },
    {
      username: "Kevin",
      date: "08-14-2023",
      review:
        "Great location, rooms were cute and quaint. Staff friendly, good community vibe. Clean.",
      rating: 8.5,
    },
    {
      username: "Eleanor",
      date: "07-01-2023",
      review:
        "I had a wonderful stay at this hotel. The room was spacious and comfortable. The staff was attentive and helpful. I highly recommend this place.",
      rating: 9.5,
    },
    {
      username: "Mark",
      date: "06-19-2023",
      review:
        "The hotel exceeded my expectations. The room was well-appointed, and the view from the balcony was stunning. I enjoyed the delicious breakfast provided by the hotel. Will definitely return.",
      rating: 9.8,
    },
    {
      username: "Samantha",
      date: "05-03-2023",
      review:
        "I had a fantastic experience here. The location is perfect, within walking distance of all the attractions. The room was spotless, and the bed was incredibly comfortable.",
      rating: 9.2,
    },
    {
      username: "Carlos",
      date: "04-12-2023",
      review:
        "I can't say enough good things about this hotel. The staff went above and beyond to make my stay enjoyable. The restaurant on-site serves delicious food, and the atmosphere is cozy.",
      rating: 9.7,
    },
    {
      username: "Emily",
      date: "03-25-2023",
      review:
        "The hotel's decor is simply stunning. I felt like I was staying in a palace. The room was spacious and luxurious. The hotel's restaurant is a must-try for anyone visiting.",
      rating: 9.9,
    },
    {
      username: "James",
      date: "03-08-2023",
      review:
        "I had a pleasant stay at this hotel. The location is convenient, and the room had all the amenities I needed. The staff was polite and helpful.",
      rating: 8.2,
    },
    {
      username: "Sophia",
      date: "02-14-2023",
      review:
        "The hotel's spa and wellness facilities were top-notch. I enjoyed a relaxing massage and spent hours by the pool. The perfect place to unwind.",
      rating: 9.6,
    },
    {
      username: "Lucas",
      date: "01-29-2023",
      review:
        "This hotel is a hidden gem. The room was cozy, and the garden view was lovely. I appreciated the complimentary breakfast and the friendly staff.",
      rating: 9.0,
    },
    {
      username: "Olivia",
      date: "12-10-2022",
      review:
        "I stayed at this hotel for a family vacation, and it was a great choice. The kids loved the pool, and the parents loved the on-site restaurant. A win-win!",
      rating: 8.8,
    },
    {
      username: "William",
      date: "11-05-2022",
      review:
        "The hotel's location is ideal for exploring the city. The room was clean and comfortable. I will definitely recommend this place to my friends.",
      rating: 8.6,
    },
    {
      username: "Ava",
      date: "10-19-2022",
      review:
        "I had a memorable stay at this hotel. The staff's attention to detail was impressive. The hotel's rooftop bar offers stunning views of the city skyline.",
      rating: 9.4,
    },
    {
      username: "Benjamin",
      date: "09-30-2022",
      review:
        "This hotel made our honeymoon special. The romantic decor, complimentary champagne, and private balcony made our stay unforgettable.",
      rating: 9.8,
    },
    {
      username: "Mia",
      date: "08-14-2022",
      review:
        "I chose this hotel for a business trip, and it exceeded my expectations. The high-speed Wi-Fi and quiet work area in the room were perfect for productivity.",
      rating: 8.9,
    },
    {
      username: "Liam",
      date: "07-25-2022",
      review:
        "I had a relaxing weekend getaway at this hotel. The spa treatments were rejuvenating, and the room's view of the mountains was breathtaking.",
      rating: 9.3,
    },
    {
      username: "Charlotte",
      date: "06-03-2022",
      review:
        "The hotel's restaurant serves the best local cuisine. I indulged in delicious dishes every night of my stay. A food lover's paradise!",
      rating: 9.7,
    },
  ];

  return (
    <>
      <Card className={styles.cardContainer} margin={"auto"}>
        <CardBody cursor="pointer" ref={btnRef} onClick={onOpen}>
          <Slider
            {...carouselSettings}
            style={{
              margin: "auto",
            }}
          >
            {hotel?.images?.map((image, index) => {
              return (
                <Box key={index}>
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

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hotel Reviews</DrawerHeader>

          <DrawerBody>
            {hotelReviews.map((user, index) => {
              return <ReviewCard key={index} user={user} />;
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
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
