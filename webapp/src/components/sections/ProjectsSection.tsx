import { VStack, HStack, Tooltip, Icon, Text } from '@chakra-ui/react';
import { SiFlask } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { ProjectCard } from '../ProjectCard/index';
import { SectionTitle } from '../Others/SectionTitle';

export function ProjectsSection() {
    return (
        <VStack id='projects' spacing="6" mb="10" w="100%">
            <SectionTitle title="Projects" />
            <ProjectCard
                bgColor='gray.600'
                title="AVCON"
                goal="Conversor Online de arquivos de mídia"
                reason="Aprender sobre conversão de mídias e manipulação de arquivos no navegador"
                challenges="Configurar FFMPEG e suas funcionalidades"
                tecnologies={
                    <HStack spacing="4">
                        <Tooltip aria-label='Flask' label='Flask' bgColor='gray.700' color='gray.100' placement='bottom'>
                            <Icon as={SiFlask} fontSize='30' color='gray.200' />
                        </Tooltip>
                        <Tooltip aria-label='Python' label='Python' bgColor='gray.700' color='gray.100' placement='bottom'>
                            <Icon as={FaPython} fontSize='30' color='yellow.500' />
                        </Tooltip>
                        <Tooltip aria-label='React' label='React' bgColor='gray.700' color='gray.100' placement='bottom'>
                            <Icon as={DiReact} fontSize='30' color='cyan' />
                        </Tooltip>

                    </HStack>
                }
                link='https://github.com/pablovicz/avcon'
                images={['https://raw.githubusercontent.com/pablovicz/avcon/main/_assets/home-layout.PNG']}
            />
        </VStack>
    );
}