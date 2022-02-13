import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, Text, Button, Box } from "@chakra-ui/react";

function Banner({
  purpose,
  title1,
  title2,
  buttonText,
  linkName,
  desc1,
  desc2,
  imageUrl,
}) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontWeight="medium" fontSize="sm">
          {purpose}
        </Text>
        <Text fontWeight="bold" fontSize="3xl">
          {title1} <br /> {title2}
        </Text>
        <Text paddingTop="3" paddingBlock="3" fontSize="lg" color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Banner;
