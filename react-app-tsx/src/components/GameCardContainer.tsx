import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

interface Props {
    children: ReactNode
}

export const GameCardContainer = ({children} : Props) => {
    return (
        <Box minWidth='240px' borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}