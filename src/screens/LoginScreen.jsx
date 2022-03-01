import React from "react";
import { Text } from "react-native";
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
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    if (formData.username === undefined) {
      setErrors({ ...errors, username: "Username is required" });
      return false;
    } else if (formData.username.length < 3) {
      setErrors({ ...errors, username: "Username is too short" });
      return false;
    }

    if (formData.password === undefined) {
      setErrors({ ...errors, password: "Password is required" });
      return false;
    } else if (formData.password.length < 8) {
      setErrors({ ...errors, password: "Password is too short" });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validate() ? handleLogin() : console.log("Validation Failed");
  };

  const handleLogin = () => {
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

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
          <FormControl isRequired isInvalid={"username" in errors}>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              isDisabled={loading}
              onChangeText={(value) =>
                setData({ ...formData, username: value })
              }
            />
            {"username" in errors && (
              <FormControl.ErrorMessage>
                {errors["username"]}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={"password" in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              isDisabled={loading}
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
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
            />
            {"password" in errors && (
              <FormControl.ErrorMessage>
                {errors["password"]}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "coolGray.500",
            }}
            alignSelf="flex-end"
          >
            Forgot Password?
          </Link>
          <Button
            mt="2"
            py={3}
            colorScheme="rose"
            isLoading={loading}
            isLoadingText="Signing in..."
            _loading={{
              bg: "rose.400:alpha.70",
              _text: {
                color: "white",
              },
            }}
            _spinner={{
              color: "white",
            }}
            onPress={onSubmit}
          >
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
