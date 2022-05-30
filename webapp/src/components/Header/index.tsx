import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { NavigationContext } from "../../service/provider/NavigationProvider";
import { Navbar } from "../Navbar";


export function Header() {

    const {selectedSection, setSelectedSection} = useContext(NavigationContext);

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
            <Flex
                flexDir="row"
                justify="space-between"
                align="center"
                pl="12"
                pr="12"
                w="100%"
                h="100%"
                maxW={1480}
            >
                <Text fontWeight="bold" fontSize="24" textAlign="start" color="app.primary">Pablo Woinarovicz Ramos</Text>
                <Navbar selectedSelection={selectedSection} onCallback={setSelectedSection} />
            </Flex>
        </Flex>
    );
}