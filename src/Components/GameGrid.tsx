import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const {game,err,isLoading}= useGames();
    const skeleton = [1,2,3,4,5,6,7,8]
  return (
    <SimpleGrid columns={{sm:1 , md : 2 , lg : 3 , xl: 4 }} spacing={10}>
      {err && <Text color="tomato">{err}</Text>}
      {game.map((game) => (
        <GameCard key={game.id} game={game}/>
      ))}
      {isLoading && skeleton.map((i)=> <GameCardSkeleton key={i}/>)}
    </SimpleGrid>
  );
};

export default GameGrid;
