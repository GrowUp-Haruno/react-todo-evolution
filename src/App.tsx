import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import { FC, memo, useState } from 'react'
import Header from './components/layouts/Header'

const App: FC = memo(() => {
  const [time, setTime] = useState<string>('')
  setInterval(() => {
    const nowTime = new Date()
    const nowHour = nowTime.getHours()
    const nowMint = nowTime.getMinutes()
    const nowSec = nowTime.getSeconds()
    setTime(`現在時刻 ${nowHour}:${nowMint}:${nowSec}`)
  }, 1000)
  return (
    <ChakraProvider>
      <Grid h="100vh" w="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)" gap={0}>
        <Header />
        <GridItem rowStart={2} rowEnd={12} colStart={1} colEnd={13} bg="white">
          <p>{time}</p>
        </GridItem>
        <GridItem rowStart={12} rowEnd={12} colStart={1} colEnd={13} bg="lightgray" />
      </Grid>
    </ChakraProvider>
  )
})

App.displayName = 'App'

export default App
