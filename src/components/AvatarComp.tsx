import { Avatar, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const nickname = "gyuseon";

const AvatarComp: FC = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <Avatar name={nickname} src="/images/박명수.jpg" />
      <Text fontSize={48} fontWeight="semibold">
        {nickname}
      </Text>
    </Flex>
  );
};

export default AvatarComp;
