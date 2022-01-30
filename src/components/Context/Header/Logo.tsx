import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text fontSize="3xl" letterSpacing="tight" fontWeight="bold" w="64">
      DashGo
      <Text as="span" ml="1" color="pink.500" fontSize="3xl">
        .
      </Text>
    </Text>
  );
}
