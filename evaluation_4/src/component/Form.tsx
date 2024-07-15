import { Input, Button, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { InputFieldPropTypes } from "../constant/interfaces";
import { useDispatch } from "react-redux";
import { EDIT, FORM_SUBMIT } from "../constant/action";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FormData } from "./FormData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  const [inputData, setInputData] = useState<InputFieldPropTypes>({
    id: 0,
    name: "",
    description: "",
    location: "",
    bio: "",
    length: 0,
    slice: (page: number, arg1: number) => {},
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !inputData.name ||
      !inputData.description ||
      !inputData.location ||
      !inputData.bio
    ) {
      return alert("Please fill all the fields");
    }

    if (inputData.name.length < 3) {
      return alert("Name should be at least 3 characters");
    }

    if (inputData.description.length < 10) {
      return alert("Description should be at least 10 characters");
    }

    if (inputData.location.length < 3) {
      return alert("Location should be at least 3 characters");
    }

    if (inputData.bio.length < 10) {
      return alert("Bio should be at least 10 characters");
    }

    if (isEditClicked) {
      dispatch({ type: EDIT, payload: inputData });
    } else {
      dispatch({
        type: FORM_SUBMIT,
        payload: { ...inputData, id: Date.now() },
      });
    }

    setIsEditClicked(false);
    setInputData({
      id: 0,
      name: "",
      description: "",
      location: "",
      bio: "",
      length: 0,
      slice: (page: number, arg1: number) => {},
    });
  };

  const handleEditData = (data: InputFieldPropTypes) => {
    setIsEditClicked(true);
    setInputData(data);
    navigate("/form");
  };

  return (
    <>
      <Button onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} />
      </Button>
      <Box position={"relative"}>
        <form className="form" onSubmit={formSubmit}>
          <Text
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            mt={"0.8rem"}
            mb={"0.2rem"}
          >
            Name
          </Text>
          <Input
            name="name"
            id="name"
            value={inputData.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <Text
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            mt={"0.8rem"}
            mb={"0.2rem"}
          >
            Description
          </Text>
          <Input
            name="description"
            value={inputData.description}
            placeholder="Enter Description"
            onChange={handleChange}
          />
          <Text
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            mt={"0.8rem"}
            mb={"0.2rem"}
          >
            Location
          </Text>
          <Input
            name="location"
            value={inputData.location}
            placeholder="Enter Location"
            onChange={handleChange}
          />
          <Text
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            mt={"0.8rem"}
            mb={"0.2rem"}
          >
            Bio
          </Text>
          <Input
            name="bio"
            value={inputData.bio}
            placeholder="Enter Bio"
            onChange={handleChange}
          />
          <Button
            px={"5rem"}
            mt={"1.5rem"}
            ml={"11rem"}
            bg={isEditClicked ? "red" : "green"}
            color={"white"}
            type="submit"
          >
            {isEditClicked ? "Edit" : "Submit"}
          </Button>
        </form>

        <Box position={"absolute"} right={"10vw"} top={"0vh"}>
          <FormData handleEditData={handleEditData} />
        </Box>
      </Box>
    </>
  );
};
