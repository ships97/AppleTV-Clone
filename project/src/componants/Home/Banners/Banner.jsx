import React, { useState } from "react";

import {
  Box,
  useBreakpointValue,
  Stack,
  Heading,
  Button,
  Container,
} from "@chakra-ui/react";

import Slider from "react-slick";
import { cards } from "../Data/Data";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  const [slider, setSlider] = useState("");

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box
      position={"relative"}
      height={"650px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"3xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                border="1px soild red"
                // w={"full"}
                position="absolute"
                color="white"
                top="15%"
                transform="translate(0, -50%)"
              >
                <Heading as='h4'
                  fontSize={{ base: "3xl", md: "2xl", lg: "5xl" }}
                  color="black"
                  marginTop="800px">
                   All Apple Originals
                </Heading>
                 <Heading fontSize={{ base: "md", lg: "2xl" }} color="black">
                   Exclusively on Apple TV+. Watch here and on the Apple TV app
                   across your devices.
                 </Heading>
                 <Button
                   size={{ base: "md", lg: "lg" }}
                   width={{ base: "sx", lg: "md" }}
                   color="black">
                   Start Free Trial
                 </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
