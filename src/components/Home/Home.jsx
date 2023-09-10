import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LogoutButton from "../Auth/LogoutButton";
import HotelCard from "./HotelCard";
import Pagination from "./Pagination";
import { UserAuth } from "../../hoc/AuthContext";

const Home = () => {
  const [hotelData, setHotelData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults] = useState(31);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { dummyHotelData } = UserAuth();

  const loadHotelData = async () => {
    try {
      setLoading(true);
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(dummyHotelData);
        }, 500);
      }).then((data) => setHotelData(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    //page load at top
    window.scrollTo(0, 0);

    loadHotelData();
  }, [page]);

  const handleSearch = () => {
    loadHotelData();
  };

  const paginate = (value) => {
    setPage(Number(value));
  };

  return (
    <>
      <LogoutButton />
      <Box>
        <Box
          bg="#032541"
          width={"90%"}
          margin={"auto"}
          color={"white"}
          padding={"50px 40px"}
        >
          <Heading textAlign={"center"}>Welcome to HotelLooker</Heading>

          <Box mt={"50px"}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Search for a hotel"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="white"
                color={"gray"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="blue"
                  h="1.75rem"
                  size="sm"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        <Box width={"90%"} m={"50px auto"}>
          {loading ? (
            <Heading>loading...</Heading>
          ) : error ? (
            <Heading>Error...</Heading>
          ) : (
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={6}
              padding={"10px"}
            >
              {hotelData &&
                hotelData
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((hotel, index) => {
                    return <HotelCard key={index} hotel={hotel} />;
                  })}
            </Grid>
          )}
        </Box>

        <Pagination
          onChange={paginate}
          totalCount={totalResults}
          currentPage={page}
          pageSize={10}
          onPageChange={paginate}
        />
      </Box>
    </>
  );
};

export default Home;
