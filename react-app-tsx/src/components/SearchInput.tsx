import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BiSearch} from "react-icons/all";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void
}
export const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (ref.current) onSearch(ref.current.value)
            }}>

            <InputGroup>
                <InputLeftElement children={<BiSearch />}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'/>
            </InputGroup>
        </form>
    )
}