import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [show, setShow] = React.useState(false);

  return (
    <Center h="100%" w="100%">
      <Box safeArea p="2" py="8" w="90%">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "coolGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "coolGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={show ? "text" : "password"}
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "coolGray.500",
              }}
              alignSelf="flex-end"
              mt="2"
            >
              Forgot Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="rose" py={3}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "coolGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "coolGray.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              // href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({});
