import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre,setSelectedGenre]= useState<Genre | null>(null);
  const [selectedPlatform,setSelectedPlatform] = useState<Platform | null>(null);

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
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
