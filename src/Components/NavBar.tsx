import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const cleanSelectedOptions = useGameQueryStore(s=>s.cleanSelectedOptions)
  return (
    <HStack padding={"10px"}>
      <Link to="/" onClick={cleanSelectedOptions}>
        <Image src={logo} boxSize={{base : "120px" , md : "60px"}} objectFit="contain"/>
      </Link>
      <SearchInput />
      <ColorSwitchMode></ColorSwitchMode>
    </HStack>
  );
};

export default NavBar;
