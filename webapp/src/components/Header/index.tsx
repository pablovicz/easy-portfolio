import { Flex, Stack, Text } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { Contacts } from "./Contacts";


export function Header() {

    // const {selectedSection, setSelectedSection} = useContext(NavigationContext);

    return (
        <Flex
            w="100vw"
            h={150}
            bgColor="gray.900"
            align="center"
            justify="center"
            mb="10"
            position="fixed"
            top="0"
        >
            <Stack
                spacing="4"
                w="100%"
                h="100%"
                maxW={1480}
                pl="12"
                pr="12"
                pt="8"
                align="center"
            >
                <Flex
                    flexDir="row"
                    justify="space-between"
                    align="center"
                    w="100%"
                >
                    <Text fontWeight="bold" fontSize="24" textAlign="start" color="app.primary">Pablo Woinarovicz Ramos</Text>
                    <Contacts />
                </Flex>
                <Navbar />
            </Stack>
        </Flex>
    );
}