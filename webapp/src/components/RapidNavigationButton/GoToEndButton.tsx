import { Button, Flex, Icon, IconButton } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsArrowDownCircle } from 'react-icons/bs';
import { NavigationContext } from "../../service/provider/NavigationProvider";
import { RenderByCondition } from "../Others/RenderByCondition";


export function GoToEndButton() {


    const [isHovered, setIsHovered] = useState(false);
    const { isLastSection, scrollToBottom, sectionIndex } = useContext(NavigationContext);







    return (
        <RenderByCondition condition={!isLastSection || sectionIndex <= 3}>
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
                        aria-label="Go to End"
                        onClick={() => scrollToBottom()}
                        size="md"
                        leftIcon={<Icon as={BsArrowDownCircle} fontSize="24" color="app.primary" />}
                        color="app.primary"
                    >
                        Final
                    </Button>
                ) : (
                    <IconButton
                        aria-label="Go to End"
                        onClick={() => scrollToBottom()}
                        colorScheme="blackAlpha"
                        size="md"
                        icon={<Icon as={BsArrowDownCircle} fontSize="24" color="app.primary" />}
                    />
                )}

            </Flex>
        </RenderByCondition>
    );
}