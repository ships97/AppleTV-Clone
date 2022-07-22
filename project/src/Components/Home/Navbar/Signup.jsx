import {
    AlertDialog,
    Button,
    Input,
    Container,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
    Heading,
    InputGroup,
    InputLeftElement,
    chakra,
    Center,
    Text,
    Stack,
    Link,
    FormControl,
    InputRightElement,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { MdOutlineEmail } from "react-icons/md";
  import { BsFillCalendarDateFill } from "react-icons/bs";
  import { FaUserAlt, FaLock } from "react-icons/fa";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useDispatch } from "react-redux";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import { useReducer } from "react";
  import { registernuser } from "../../../Redux/Registration/action";
  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);
  
  const initState = {
    name: "",
    email: "",
    password: "",
    // dateofbirth: "",
  };
  
  export const Signup = ({
    isOpen,
    onOpen,
    onClose,
    cancelRef,
    handelhideshow,
  }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setuser] = useState(initState);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      let { name, value } = e.target;
      setuser({ ...user, [name]: value });
    };
  
    const handleShowClick = () => setShowPassword(!showPassword);
  
    const handelsubmit = (event) => {
      event.preventDefault();
      dispatch(registernuser(user)).then(() => {
        handelhideshow();
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
                <Center p={4}>
                  <Heading size="lg">Create Apple ID</Heading>
                </Center>
                <FormControl mt={5}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      size="lg"
                      children={
                        <CFaUserAlt
                          color="gray.300"
                          focusBorderColor="pink.400"
                        />
                      }
                    />
                    <Input
                      isRequired
                      type="text"
                      placeholder="User Name"
                      name="name"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mt={5}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<MdOutlineEmail color="gray.300" />}
                    />
                 
                    <Input
                      type="email"
                      placeholder="    Email address"
                      name="email"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <p>Your email will be your Apple ID.</p>
                </FormControl>
                <FormControl mt={5}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<BsFillCalendarDateFill color="gray.300" />}
                    />
                    <Input
                      type="date"
                      placeholder="Birth Date"
                      name="dateofbirth"
                      // onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mt={5}>
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
              </Container>
              <Center>
                <AlertDialogFooter>
                  <Button
                    colorScheme="telegram"
                    ref={cancelRef}
                    onClick={handelsubmit}
                    // onClick={handelhideshow}
                    //   onClick={onClose}
                  >
                    Create ID
                  </Button>
                </AlertDialogFooter>
              </Center>
              <Stack pt={3} mb={5}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  };
  