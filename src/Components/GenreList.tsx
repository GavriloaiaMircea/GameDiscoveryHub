import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/image-url";
import { Genre } from "../hooks/useGenres";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({
  selectedGenreId,
  onSelectGenre,
}: Props) => {
  const { data } = useGenres();

  return (
    <>
      <Heading marginBottom={3} fontSize="3xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropedImage(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontSize="md"
                objectFit="cover"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
