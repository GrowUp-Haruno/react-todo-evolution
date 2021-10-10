import { GridItem } from '@chakra-ui/react'
import { FC } from 'react'

// Propsの型定義
// type PropsType = {
//
// }

const Header: FC = () => (
  <GridItem rowStart={1} rowEnd={2} bg="lightgray">
    <p>test</p>
  </GridItem>
)

Header.displayName = 'Header'
export default Header
