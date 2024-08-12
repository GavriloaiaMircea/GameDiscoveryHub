import { HStack , Image} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorSwitchMode from "./ColorSwitchMode"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput />
        <ColorSwitchMode></ColorSwitchMode>
    </HStack>
  )
}

export default NavBar