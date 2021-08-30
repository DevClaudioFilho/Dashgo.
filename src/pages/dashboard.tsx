import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
}
