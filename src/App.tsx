import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea="nav" bg="tomato">
        Nav
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
