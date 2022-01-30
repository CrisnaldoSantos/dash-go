import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1180}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" letterSpacing="tight" fontWeight="bold" w="64">
        DashGo
        <Text as="span" ml="1" color="pink.500" fontSize="3xl">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex alignItems="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" title="inProgress" />
          <Icon as={RiUserAddLine} fontSize="20" title="inProgress" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Crisnaldo Carvalho</Text>
            <Text color="gray.300" fontSize="small">
              crisnaldo72@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Crisnaldo Carvalho"
            src="https://avatars.githubusercontent.com/u/45441190?s=400&u=9b4cb53944a3fcff05a169bfcbbcb96a7868a809&v=4"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
