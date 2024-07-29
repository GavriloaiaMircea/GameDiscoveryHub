import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" >
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
