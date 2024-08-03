import { HStack , Image} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorSwitchMode from "./ColorSwitchMode"
import SearchInput from "./SearchInput"


interface Props{
  onSearch:(searchText:string)=>void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorSwitchMode></ColorSwitchMode>
    </HStack>
  )
}

export default NavBar