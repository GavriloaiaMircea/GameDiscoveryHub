import { Badge } from "@chakra-ui/react"

interface Props{
    score:number
}

const CriticScore = ({score} : Props) => {
   const color =  score > 75 ? "green" : score > 50 ? "yellow" : "red" ;
  return (
    <Badge colorScheme={color} fontSize={16} borderRadius={4} paddingX={2}>{score}</Badge>
  )
}

export default CriticScore