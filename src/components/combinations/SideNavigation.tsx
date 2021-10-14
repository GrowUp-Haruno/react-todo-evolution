import { FC } from 'react'

// Propsの型定義
type PropsType = {
  category:Array<string>
  selectCategory:string
  setSelectCategor:React.Dispatch<string>
}

const SideNavigation: FC<PropsType> = () => <></>

SideNavigation.displayName = 'SideNavigation'
export default SideNavigation
