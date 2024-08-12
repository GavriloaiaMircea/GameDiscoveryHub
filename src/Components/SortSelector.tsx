import { Menu , MenuButton , MenuList,MenuItem ,Button} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../store"

const SortSelector = () => {

   const sortOrders = [
    {value : "" , label : "Relevance"},
    {value : "name" , label : "Name"},
    {value : "-metacritic" , label : "Popularity"},
    {value : "-rating" , label : "Average Rating"},
   ]

   const sortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder)
   const setSortOrder = useGameQueryStore(s=>s.setSortOrder)

   const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order=><MenuItem onClick={()=> setSortOrder(order.value)} key={order.value} value ={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default SortSelector