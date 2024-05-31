import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store";

// interface Props{
//     onSelectPlatform :(platform : Platform) => void
//     selectedPlatformId? : number
// }

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
