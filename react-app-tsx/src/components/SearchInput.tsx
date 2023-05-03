import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BiSearch} from "react-icons/all";

export const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BiSearch />}/>
            <Input borderRadius={20} placeholder='Search games...' variant='filled'/>
        </InputGroup>
    )
}