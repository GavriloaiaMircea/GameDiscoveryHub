import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../hooks/useGenres";
import { PiSelectionForegroundLight } from "react-icons/pi";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, err } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (err) return null;
  if (err) return null;

  return (
    <List>
      {isLoading && skeleton.map((i) => <GenreListSkeleton key={i} />)}
      {isLoading && skeleton.map((i) => <GenreListSkeleton key={i} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropedImage(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontSize="md"
              whiteSpace="pre-wrap"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
