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
  //   const [errors, setErrors] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = () => {
    handleSignUp();
    // validate() ? handleSignUp() : console.log("Validation Failed");
  };

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              isDisabled={loading}
              onChangeText={(value) =>
                setData({ ...formData, username: value })
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              isDisabled={loading}
              onChangeText={(value) => setData({ ...formData, email: value })}
            />
          </FormControl>
          <FormControl>
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
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
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
                setData({ ...formData, confirmPassword: value })
              }
            />
          </FormControl>
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
            Sign Up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "coolGray.200",
              }}
            >
              Already registered?.{" "}
            </Text>
            <Link
              _text={{
                color: "coolGray.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => {}}
            >
              Sign In
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
