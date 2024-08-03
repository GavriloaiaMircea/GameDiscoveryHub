import { InputGroup, InputLeftElement,Input } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react'

interface Props{
    onSearch:(searchText:string)=>void
}

const SearchInput = ({onSearch}:Props) => {
const ref = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current)
        onSearch(ref.current.value)
    }}>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input ref={ref} placeholder="Search for games" borderRadius={20} variant="filled" />
        </InputGroup>
    </form>
  )
}

export default SearchInput