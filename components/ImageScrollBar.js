import React, { useContext } from "react";
import Image from "next/image";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

function ImageScrollBar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((image) => (
        <Box width="910px" itemId={image.id} overflow="hidden" p="1">
          <Image
            alt="Property"
            placeholder="blur"
            blurDataURL={image.url}
            src={image.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 1000px, (max-width:1023px) 400px, 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default ImageScrollBar;
