import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import {getCroppedImgUrl} from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

export const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres()
    if (error) return null;
    if (isLoading) return <Spinner/>;
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                objectFit='cover'
                                boxSize='32px'
                                borderRadius={8}
                                src={getCroppedImgUrl(genre.image_background)}
                            />
                            <Button whiteSpace='normal' textAlign='left'
                                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                    onClick={() => onSelectedGenre(genre)} fontSize='lg'
                                    variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    )
}