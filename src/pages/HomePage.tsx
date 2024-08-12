import {Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react';
import GameGrid from '../Components/GameGrid';
import GameHeading from '../Components/GameHeading';
import GenreList from '../Components/GenreList';
import PlatformSelector from '../Components/PlatformSelector';
import SortSelector from '../Components/SortSelector';

const HomePage = () => {
    return (
        <Grid
          templateAreas={{
            base: `"main"`,
            lg: `"aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <Show above="lg">
            <GridItem gridArea="aside" paddingX={5}>
              <GenreList />
            </GridItem>
          </Show>
          <GridItem gridArea="main">
            <GameHeading />
            <Flex paddingLeft={2} marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
            <GameGrid />
          </GridItem>
        </Grid>
      );
}

export default HomePage