import { HStack, List, ListItem ,Image,Text,Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data , isLoading, err} = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12];

  if(err) return null;

  return (
    <List>
        {isLoading && skeleton.map((i)=><GenreListSkeleton key={i}/>)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCropedImage(genre.image_background)} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
