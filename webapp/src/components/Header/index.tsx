import { Flex, Text } from "@chakra-ui/react";
import {Contacts} from './Contacts';


export function Header() {

    return (
        <Flex
            w="100vw"
            h={150}
            bgColor="gray.900"
            align="center"
            justify="center"
        >
            <Flex
                flexDir="row"
                justify="space-between"
                align="center"
                pl="12"
                pr="12"
                w="100%"
                h="100%"
                maxW={1480 }
                
            >
                <Text fontWeight="bold" fontSize="20" textAlign="start" color="gray.100">Pablo Woinarovicz Ramos</Text>
                <Contacts />
            </Flex>
        </Flex>
    );
}