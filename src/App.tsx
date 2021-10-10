import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import { FC, memo } from 'react'
import Header from './components/layouts/Header'
import useClock from './hooks/useClock'

const App: FC = memo(() => {
  const { time } = useClock()
  return (
    <ChakraProvider>
      <Grid h="100vh" w="100vw" templateRows="1fr 10fr 1fr" gap={0}>
        <Header />
        <GridItem rowStart={2} rowEnd={3} bg="white">
          <p>{time}</p>
        </GridItem>
        <GridItem rowStart={3} rowEnd={4} bg="lightgray" />
      </Grid>
    </ChakraProvider>
  )
})

App.displayName = 'App'

export default App
