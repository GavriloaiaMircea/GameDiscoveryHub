import { Grid, GridItem, Show,HStack } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./Components/SortSelector";

export interface GameQuerry {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder:string
}

function App() {
  const [gameQuerry, setGameQuerry] = useState<GameQuerry>({} as GameQuerry);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuerry({ ...gameQuerry, genre })}
            selectedGenre={gameQuerry.genre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuerry({ ...gameQuerry, platform })
            }
            selectedPlatform={gameQuerry.platform}
          />
          <SortSelector sortOrder={(gameQuerry.sortOrder)} onSelectOrder={(sortOrder)=>setGameQuerry({...gameQuerry,sortOrder})}/>
        </HStack>
        <GameGrid gameQuerry={gameQuerry} />
      </GridItem>
    </Grid>
  );
}

export default App;
