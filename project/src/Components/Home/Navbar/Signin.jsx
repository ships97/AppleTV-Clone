import {
    AlertDialog,
    Container,
    Button,
    Heading,
    Input,
    Text,
    Center,
    InputRightElement,
    AlertDialogFooter,
    AlertDialogContent,
    InputGroup,
    FormControl,
    FormLabel,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { getusertoken } from "../../../Redux/Login/action";
  import { useNavigate } from "react-router-dom";
  
  const init = {
    email: "",
    password: "",
  };
  
  export const Signin = ({ isOpen, onClose, cancelRef, handelhideshow }) => {
    const [userlogin, setuserlogin] = useState(init);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
  
    const handleShowClick = () => setShowPassword(!showPassword);
  
    const handleChange = (e) => {
      let { name, value } = e.target;
      setuserlogin({ ...userlogin, [name]: value });
    };
  
    const handelsubmit = (event) => {
      dispatch(getusertoken({ userlogin, handelhideshow, onClose })).then(() => {
        onClose();
      });
    };
  
    return (
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          size="2xl"
        >
          <AlertDialogOverlay>
            <AlertDialogContent minW={{ base: 70, md: 100 }}>
              <Container centerContent>
                <FormControl isRequired>
                  <Center p={5}>
                    <img
                      width={70}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAANlBMVEX///+qqqqnp6ekpKT29vbx8fGzs7Ovr6+9vb37+/u3t7ft7e3e3t7S0tLn5+fh4eHIyMjY2Ngsc+t9AAADjklEQVR4nO2b7ZKrIAyGJSBfisX7v9kj7nZrqW2H8C7M7On727FPIQlJiMPw0Ucf/Q9SfX99iV6YjgxTNESiI8Jo5fb7oh+Cit8A3RAu5goghHY9CIL8ARBkexDYA4Gg2IHA04FAyLk9gb0jELK9NR7tYLfG5gRLRkChNYEyIkNovg+RMoLmLqlkvghTa4SHRWgeFFRG0OF8CBlC+7DkfG9bHKb7RSDfnGBY7/yB9Nge4e506EIw6DuCLpnKITi3Pxp2qZsz6qULwRVhS9zXPgBbWNh+XUoRL70ANoUQ5pZu4Nx7k3dqnKZRKbxzqDlE6723cX5xDE3BaiGl3GxDx4C0zyWK9FraDY+kCacZwSWSpFukSkZiMTaiVk15SkB6zQxgDCZ/an/QhPqze9aPb05hQMTbUriLFadPpQdNpbuOPk/Lbv9Q6q8NWaKRzwB2CF+zEOHlu0UKCclKXj2THiN2GuPytJAt7vHh7NNNKJZkMTiPWgM2w7knsMWwh4jbhW+VVjgzmoCoMFJOYABGcICaYiIorvJmMAGjzsQCMNYgq096EDj9/rUF4hR5F+wicPo+FmqMxMgXRiQAr9rHeiSr8wTdB17LA7oIkrMIExSB1QuGmgIvY8tbaHUIrIoKGxU4BAM0OvMacEgCXjPYIQ8InjU+NNarEFhl1PhB+IMIktVbwK4CyymxHsE6qqFxQRgOAraGIFZbNL/4rENguQS0nOTZI6zBtEtyGsHQlIUXGcBVtWcswwSuaTkGCe4tcC6QsXU1yymwLrFtRXkWfQEjMELkCI2PCcEUM/j3by1kKL5IRhvDxiAKGcCRYZcs672C211folgUH/A7kRhMSZzMx7VAkrpgN36FoOzYxB7YNxX4BbbZc1VZPo2+DNhV5pjwcyKpbNTlN0JDabMBfB+QVDqO6uAE5alLPs9aj1BeWIEROBXuCr6t5TSjoU7Bq+yw90O8MQpgK5jX8TkZa2WLeK2OARmf+ANgoNOqZgwRc1lXNxALGWOQdXN4gGEOrjdc5UytOdRPRlfXNYAB9coECvKdQFV0KCzknullSk8nM4YHAtRU7rlb7IO33lrrn47a8ebKTnWSQhH59Web3RL9CQV/wu9EczZSKU3I4o1b8rFLMtgvVtThX6a50zNPG8PBMEhE+BDwYtMIrpTPpm93zdHIXRow83oit6xhXd69Wk3LMnb5ROCjj/6C/gHONioRCuqq6AAAAABJRU5ErkJggg=="
                      alt="apple"
                    />
                  </Center>
                  <Center p={2}>
                    <Heading size="lg">Sign in with your Apple ID</Heading>
                  </Center>
                  <Center p={2}>
                    <FormLabel htmlFor="first-name">
                      You will be signed in to Apple TV and Apple Music
                    </FormLabel>
                  </Center>
                  <Center p={2}>
                    <FormControl>
                      <InputGroup>
                        <Input
                          isRequired
                          id="first-name"
                          placeholder="Apple ID"
                          borderRightRadius="0"
                          name="email"
                          onChange={handleChange}
                        />
                        <Button
                          borderLeftRadius="0"
                          ref={cancelRef}
                          onClick={handelsubmit}
                        >
                          Login
                        </Button>
                        {/* <InputRightAddon children="Login" cursor="pointer" /> */}
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Center>
                </FormControl>
              </Container>
              <Center p={5}>
                <AlertDialogFooter>
                  <Text
                    color=" #0b057ab8"
                    onClick={handelhideshow}
                    _hover={{
                      textDecoration: "underline",
                      color: " #057a72b8",
                    }}
                  >
                    Create New Apple ID
                  </Text>
                </AlertDialogFooter>
              </Center>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };
  // https://apple-tv-plus-clone.vercel.app/
  // https://github.com/vadimghedreutan/Apple-tv-plus-clone
  