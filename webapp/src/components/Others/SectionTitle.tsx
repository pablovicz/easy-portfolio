import { Flex, HStack, Text } from "@chakra-ui/react";

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <HStack
            spacing="4"
            w="100%"
        >
            <Flex h="1px" w="100%" borderBottomColor="gray.100" borderBottomWidth="0.25px" borderBottomStyle="solid"></Flex>
            <Text fontSize="20" fontWeight="extrabold" color='gray.100' textAlign="center" minW={`${title.length + 120}px`}>{title}</Text>
            <Flex h="1px" w="100%" borderBottomColor="gray.100" borderBottomWidth="0.25px" borderBottomStyle="solid"></Flex>
        </HStack>
    );
}