import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import { SectionTitle } from "../Others/SectionTitle";



const aboutMeContent = {
    sumarry: {
        pt: {
            part1: "Olá! Meu nome é Pablo, e eu sou desenvolvedor Full Stack, de Curitiba, Paraná.",
            part2: "Sempre fui uma pessoa curiosa, e como tal, tenho a necessidade de sempre estar aprendendo como as coisas funcionam e porque elas funcionam.",
            part3: "Acredito que é previsível que o fato de eu ter me tornado desenvolvedor foi resultado desse processo curioso que foi e têm sido minha vida, "
        }
    }
}



export function AboutMeSection() {

    return (
        <VStack id='about-me' spacing="6" mb="10" w="100%">
            <SectionTitle title="Sobre mim" />
            <Text textAlign="center" color="gray.100" maxW={900}>
                Olá! <br />
                Meu nome é Pablo, e eu sou desenvolvedor Full Stack, de Curitiba, Paraná. <br />
                Sempre fui uma pessoa curiosa, e como tal, tenho a necessidade de sempre estar aprendendo como as coisas funcionam e porque elas funcionam. <br />
                Acredito que é previsível que, o fato de eu ter me tornado desenvolvedor, foi resultado desse processo curioso que foi e têm sido minha vida, o mundo da tecnologia é fascinante! E sinto que aliando isso à minha curiosidade, posso criar coisas incríveis! <br />
                Atualmente, tenho conhecimentos sólidos tanto no backend, com Java, Node e Python, quanto no mundo do frontend, em React. <br />
                Tenho sólidas experiências na criação de APIs REST, Single Page Applications bem como familiaridade com banco de dados Relacionais e não Relacionais. Além disso, também tenho experiências em processos de ETL e manipulação de dados usando Python.
                Será um prazer mostrar um pouco do meu trabalho e sanar quaisquer dúvidas!
            </Text>

        </VStack>
    );
}