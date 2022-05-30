import { Box, Button, Flex, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
    title: string;
    goal: string;
    reason: string;
    challenges: string;
    tecnologies: ReactNode;
    images: string[];
    link: string;
    bgColor: string;
}


export function ProjectCard({ title, goal, reason, challenges, tecnologies, images, link, bgColor }: ProjectCardProps) {
    return (
        <Flex
            flexDir="row"
            align="center"
            justify="space-betwen"
            bgColor={bgColor}
            borderRadius="10px"
            w="100%"
            p="10"
        >
            <Box h="100%" w='40%' mr="12">
                <Image
                    objectFit='cover'
                    src={images[0]}
                    alt={images[0]}
                />
            </Box>
            <VStack spacing="8" h="90%" w='60%' fontSize="16">
                <Text fontSize="26" fontWeight="bold" color="app.primary" textAlign="center" w="100%">{title}</Text>
                <VStack spacing="4" w="100%">
                    <Text fontWeight="semibold" color="app.primary" textAlign="left" w="100%">Objetivo:</Text>
                    <Text fontWeight="regular" color="gray.100" w="90%">{goal}</Text>
                </VStack>
                <VStack spacing="4" w="100%">
                    <Text fontWeight="semibold" color="app.primary" textAlign="left" w="100%">Razão do Projeto:</Text>
                    <Text fontWeight="regular" color="gray.100" w="90%">{reason}</Text>
                </VStack>
                <VStack spacing="4" w="100%">
                    <Text fontWeight="semibold" color="app.primary" textAlign="left" w="100%">Desafios e Dificuldades:</Text>
                    <Text fontWeight="regular" color="gray.100" w="90%">{challenges}</Text>
                </VStack>
                <Flex
                    flexDir="row"
                    align="center"
                    justify="space-betwen"
                    w="100%"
                    h="100%"
                >
                    <VStack spacing="4" w="100%">
                        <Text fontWeight="semibold" color="app.primary" textAlign="left" w="100%">Tecnologias Utilizadas:</Text>
                        <Text fontWeight="regular" color="gray.100" w="90%">{tecnologies}</Text>
                    </VStack>
                    <Link href={link} isExternal>
                        <Icon as={FiExternalLink} fontSize="24" color="gray.300" />
                    </Link>
                </Flex>
            </VStack>
        </Flex>
    );
}