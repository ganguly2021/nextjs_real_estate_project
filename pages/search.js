import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import SearchFilters from "../components/SearchFilters";

function SearchPage() {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilter) => !prevFilter)}
      >
        <Text>Seach Property By Filters</Text>
        <Icon as={BsFilter} paddingLeft="2" w="7" />
      </Flex>
      { searchFilters && <SearchFilters /> }
    </Box>
  );
}

export default SearchPage;
