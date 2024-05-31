import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";
import { useNavigate } from "react-router-dom";

// interface Props {
//     onSearch : (searchText : string) => void
// }

const SearchInput = () => {
  const navigate = useNavigate()
  const setSearchText = useGameStore(s => s.setSearchText)
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) setSearchText(ref.current.value)
        navigate('/')
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
