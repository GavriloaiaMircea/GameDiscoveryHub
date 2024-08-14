import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots({ gameId });

  if (error) throw error;

  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
