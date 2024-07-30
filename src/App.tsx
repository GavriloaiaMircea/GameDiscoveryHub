import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

function App() {
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
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
