import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

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
        <GridItem gridArea="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main" bg="silver">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
