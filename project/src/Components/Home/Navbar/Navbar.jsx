import React, { useState } from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Box,
  Menu,
  Avatar,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/Login/action";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hide, sethide] = useState(true);
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("tvappletoken"));
  const handelhideshow = () => {
    sethide(!hide);
  };
  return (
    <Flex
      top={0}
      alignItems="center"
      gap="2"
      width="100%"
      background="black"
      p={2}
      zIndex={10}
      position="fixed"
    >
      <Box p="2">
        <Link to="/">
          <img
            style={{ marginLeft: "50px", width: "70px", padding: "5px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBiEc2Q442yUNt4aDxe9ZQOYi9Zh0O8NX00KLxLBxMsZSFbF2VGH_arUXiXUFKBgtBHg&usqp=CAU"
          />
        </Link>
      </Box>
      <Spacer />
      {token == undefined || token == "" ? (
        <ButtonGroup gap="2">
          <Button
            leftIcon={<BsPerson />}
            colorScheme="telegram"
            mr={6}
            onClick={onOpen}
          >
            Sign In
          </Button>
          {hide ? (
            <Signin
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
              cancelRef={cancelRef}
              handelhideshow={handelhideshow}
            />
          ) : (
            <Signup
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
              cancelRef={cancelRef}
              handelhideshow={handelhideshow}
            />
          )}
        </ButtonGroup>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"md"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem
              onSelect={() => {
                dispatch(logout());
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}

export default Navbar;