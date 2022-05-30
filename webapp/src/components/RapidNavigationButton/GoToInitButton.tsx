import { Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsArrowUpCircle } from 'react-icons/bs';
import { NavigationContext } from "../../service/provider/NavigationProvider";
import { RenderByCondition } from "../Others/RenderByCondition";


export function GoToInitButton() {


    const [isHovered, setIsHovered] = useState(false);
    const { isFirstSection, sectionIndex, scrollToTop } = useContext(NavigationContext);







    return (
        <RenderByCondition condition={!isFirstSection || sectionIndex > 3}>
            <Flex
                position="fixed"
                bottom="10"
                right="10"
                zIndex={10}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? (
                    <Button
                        colorScheme="blackAlpha"
                        onClick={() => scrollToTop()}
                        size="md"
                        leftIcon={<Icon as={BsArrowUpCircle} fontSize="24" color="app.primary" />}
                        color="app.primary"
                    >
                        Início
                    </Button>
                ) : (
                    <IconButton
                        aria-label="Back to init"
                        onClick={() => scrollToTop()}
                        colorScheme="blackAlpha"
                        size="md"
                        icon={<Icon as={BsArrowUpCircle} fontSize="24" color="app.primary" />}
                    />
                )}

            </Flex>
        </RenderByCondition>
    );
}