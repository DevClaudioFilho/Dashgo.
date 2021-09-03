import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Claudio Filho</Text>
          <Text color="gray.300" fontSize="small">
            claudiofilhodf@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Claudio Filho"
        src="https://github.com/devclaudiofilho.png"
      />
    </Flex>
  );
}
