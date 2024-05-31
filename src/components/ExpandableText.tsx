import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children : string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if(!children) return null

  return children.length <= 300 ? (
    <Text>{children}</Text>
  ) : (
    <Text>
      {isExpanded ? children : children.slice(0, 300) + "..."}
      <Button  mx = {1} size={'xs'} fontWeight={'bold'} colorScheme="yellow" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
