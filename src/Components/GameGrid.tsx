import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, err, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid padding="10px" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
      {err && <Text color="tomato">{err}</Text>}
      {data.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
      {isLoading &&
        skeleton.map((i) => (
          <GameCardContainer>
            <GameCardSkeleton key={i} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
