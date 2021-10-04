import { Grid, GridItem } from '@chakra-ui/react'
import { FC, memo } from 'react'
import Header from './components/layouts/Header'

const App: FC = memo(() => (
  <Grid h="100vh" w="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)" gap={0}>
    <Header />
    <GridItem rowStart={2} rowEnd={12} colStart={1} colEnd={13} bg="white" />
    <GridItem rowStart={12} rowEnd={12} colStart={1} colEnd={13} bg="lightgray" />
  </Grid>
))

App.displayName = 'App'

export default App
