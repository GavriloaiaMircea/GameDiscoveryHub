import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const {game,err }= useGames();
  return (
    <SimpleGrid columns={{sm:1 , md : 2 , lg : 3 , xl: 4 }} spacing={10}>
      {err && <Text color="tomato">{err}</Text>}
      {game.map((game) => (
        <GameCard key={game.id} game={game}/>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
