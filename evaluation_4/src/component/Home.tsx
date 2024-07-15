import "../App.css";
import { Grid, GridItem, Text, Box, Button, Image } from "@chakra-ui/react";
import {
  faHouse,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormData } from "../component/FormData";
import profile_img from "../images/images.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [color, setColor] = useState<string>("gray");

  const handleColorClick = (givenColor: string) => {
    setColor(givenColor);
  };

  const handleForegroundColor = (foreground: string) => {
    if (foreground === "black") {
      window.document.body.style.backgroundColor = "black";
      window.document.body.style.color = "white";
    } else {
      window.document.body.style.backgroundColor = "white";
      window.document.body.style.color = "black";
    }
  };

  return (
    <>
      <Grid templateColumns="20% 80%" mt={5} ml={5}>
        <GridItem>
          <Text mb={2} fontSize={"xl"} fontWeight={"bold"}>
            <span className="navbar_icons">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </Text>
          <Text mb={2} fontSize={"xl"} fontWeight={"bold"}>
            <span className="navbar_icons">
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
            <Link to="/form"> Form</Link>
          </Text>
        </GridItem>

        <GridItem mb={"10vh"}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              Themes
            </Text>
            <Box
              border={"1px solid gray"}
              p={4}
              w={"90%"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"space-between"}
              mt={3}
            >
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Apply a skin to your profile
              </Text>
              <Box display={"flex"} columnGap={5}>
                <Button border={"0.5px solid black"}>
                  <span className="navbar_icons">
                    {" "}
                    <FontAwesomeIcon icon={faPlus} />
                  </span>{" "}
                  Custom
                </Button>
                <Button bg={"black"} color={"white"} px={7}>
                  Save
                </Button>
              </Box>
            </Box>
          </Box>

          <Grid templateColumns={"40% 50%"} columnGap={10}>
            <GridItem>
              <Box my={5}>
                <Text fontWeight={"bold"} fontSize={"xl"} mb={3}>
                  Solids
                </Text>
                <Grid
                  templateColumns={"repeat(5, 1fr)"}
                  rowGap={3}
                  columnGap={5}
                >
                  <Button
                    onClick={() => handleColorClick("red")}
                    bg={"red"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("green")}
                    bg={"green"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("yellow")}
                    bg={"yellow"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("pink")}
                    bg={"pink"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("orange")}
                    bg={"orange"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("blue")}
                    bg={"blue"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("purple")}
                    bg={"purple"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("whitesmoke")}
                    bg={"whitesmoke"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("black")}
                    bg={"black"}
                  ></Button>
                  <Button
                    onClick={() => handleColorClick("gray")}
                    bg={"gray"}
                  ></Button>
                </Grid>
              </Box>

              <Box my={10}>
                <Text fontWeight={"bold"} fontSize={"xl"} mb={3}>
                  Linear Gradients
                </Text>
                <Grid
                  templateColumns={"repeat(5, 1fr)"}
                  rowGap={3}
                  columnGap={5}
                >
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, red , blue )")
                    }
                    bgImage={"linear-gradient(45deg, red , blue )"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick(
                        "linear-gradient(45deg, orange , purple )"
                      )
                    }
                    bgImage={"linear-gradient(45deg, orange, purple)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick(
                        "linear-gradient(45deg, blue , gray 90%)"
                      )
                    }
                    bgImage={"linear-gradient(45deg, blue, gray 90%)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, white, purple )")
                    }
                    bgImage={"linear-gradient(45deg, white, purple)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, green, aqua )")
                    }
                    bgImage={"linear-gradient(45deg, green, aqua)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, gray, green )")
                    }
                    bgImage={"linear-gradient(45deg, gray, green)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, purple, red )")
                    }
                    bgImage={"linear-gradient(45deg, purple, red)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick(
                        "linear-gradient(45deg, whitesmoke, red )"
                      )
                    }
                    bgImage={"linear-gradient(45deg, whitesmoke, red)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, black, orange )")
                    }
                    bgImage={"linear-gradient(45deg, black, orange)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("linear-gradient(45deg, violet, green )")
                    }
                    bgImage={"linear-gradient(45deg, violet, green)"}
                  ></Button>
                </Grid>
              </Box>

              <Box my={10}>
                <Text fontWeight={"bold"} fontSize={"xl"} mb={3}>
                  Radial Gradients
                </Text>
                <Grid
                  templateColumns={"repeat(5, 1fr)"}
                  rowGap={3}
                  columnGap={5}
                >
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(red , blue )")
                    }
                    bgImage={"radial-gradient(red , blue )"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(orange, purple)")
                    }
                    bgImage={"radial-gradient(orange, purple)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(blue, gray 90%)")
                    }
                    bgImage={"radial-gradient(blue, gray 90%)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(white, purple)")
                    }
                    bgImage={"radial-gradient(white, purple)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(green, aqua)")
                    }
                    bgImage={"radial-gradient(green, aqua)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(gray, green)")
                    }
                    bgImage={"radial-gradient(gray, green)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(purple, red)")
                    }
                    bgImage={"radial-gradient(purple, red)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(whitesmoke, red)")
                    }
                    bgImage={"radial-gradient(whitesmoke, red)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(black, orange)")
                    }
                    bgImage={"radial-gradient(black, orange)"}
                  ></Button>
                  <Button
                    onClick={() =>
                      handleColorClick("radial-gradient(violet, green)")
                    }
                    bgImage={"radial-gradient(violet, green)"}
                  ></Button>
                </Grid>
              </Box>

              <Box>
                <Text fontWeight={"bold"} fontSize={"xl"} mb={3}>
                  Foreground Color
                </Text>
                <Grid
                  templateColumns={"repeat(5, 1fr)"}
                  rowGap={3}
                  columnGap={5}
                >
                  <Button
                    border={"1px solid black"}
                    onClick={() => handleForegroundColor("white")}
                    bg={"white"}
                  ></Button>
                  <Button
                    border={"1px solid black"}
                    onClick={() => handleForegroundColor("black")}
                    bg={"black"}
                  ></Button>
                </Grid>
              </Box>
            </GridItem>

            <GridItem position={"relative"}>
              <Box h={40} w={"100%"} bg={color} borderRadius={10}></Box>
              <Box
                width={"7vw"}
                height={"7vw"}
                position={"absolute"}
                top={"15vh"}
                left={10}
              >
                <Image
                  src={profile_img}
                  borderRadius={"50"}
                  w={"100%"}
                  h={"100%"}
                />
              </Box>
              <FormData />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};
