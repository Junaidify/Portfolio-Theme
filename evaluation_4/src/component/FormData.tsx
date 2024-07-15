import { InputFieldPropTypes } from "../constant/interfaces";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export const FormData = ({ handleEditData }: any) => {
  const formData = useSelector((state: InputFieldPropTypes[]) => state);
  const [page, setPages] = useState<number>(0);

  const handlePrevPage = () => {
    page > 0 && setPages((prev) => prev - 1);
  };

  const handleNextPage = () => {
    formData && formData.length - 1 > page && setPages((prev) => prev + 1);
  };

  return (
    <>
      {formData && formData.length > 0
        ? formData.slice(page, page + 1).map((item: InputFieldPropTypes) => {
            return (
              <Box key={item.id} mt={"10vh"} ml={"1.5vw"}>
                <Text fontSize={"5xl"} fontWeight={"bold"}>
                  {item.name}
                </Text>
                <Text fontSize={"2xl"} mt={"-1vh"}>
                  {item.description}
                </Text>
                <Text mt={"3vh"} fontSize={"xl"} fontWeight={"bold"}>
                  <span className="navbar_icons">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  {item.location}
                </Text>
                <Text
                  border={"1px solid black"}
                  px={5}
                  py={2}
                  my={"3vh"}
                  borderRadius={"10px"}
                  fontSize={"md"}
                >
                  {item.bio}
                </Text>
                <Link to="/form">
                  <Button
                    onClick={() => handleEditData(item)}
                    border={"1px dotted black"}
                    bg={window.document.body.style.backgroundColor === 'black' ? 'white' : 'black'} color={window.document.body.style.backgroundColor === 'black' ? 'black' : 'white'}
                  >
                    Edit Details
                  </Button>
                </Link>
              </Box>
            );
          })
        : null}

      <Grid
        templateColumns={"repeat(2, 1fr)"}
        gap={6}
        mt={"10vh"}
        w={"80%"}
        mx={"auto"}
      >
        <Button
          onClick={handlePrevPage}
          bg={
            window.document.body.style.backgroundColor === "black"
              ? "white"
              : "black"
          }
          color={
            window.document.body.style.backgroundColor === "black"
              ? "black"
              : "white"
          }
        >
          Prev
        </Button>
        <Button
          onClick={handleNextPage}
          bg={
            window.document.body.style.backgroundColor === "black"
              ? "white"
              : "black"
          }
          color={
            window.document.body.style.backgroundColor === "black"
              ? "black"
              : "white"
          }
        >
          Next
        </Button>
      </Grid>
    </>
  );
};
