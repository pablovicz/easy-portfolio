import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";


export function Home() {
    return (
        <Flex
            width="100vw"
            h="100vh"
            alignItems="center"
            justifyContent="space-between"
            flexDir="column"
        >
            <Header />
            <Flex 
            width="100%"
            h="100%"
            alignItems="center"
            justifyContent="space-between"
            flexDir="column"
            maxW={1480 }

            >
                <Text>Page Home </Text>
            </Flex>
        </Flex>
    );
}