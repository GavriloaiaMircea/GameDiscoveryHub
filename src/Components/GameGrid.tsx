import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuerry: GameQuery;
}

const GameGrid = ({ gameQuerry }: Props) => {
  const { data, err, isLoading } = useGames(gameQuerry);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if(err) return <Text color="tomato">{err}</Text>

  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
    >
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
      {isLoading &&
        skeleton.map((i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
