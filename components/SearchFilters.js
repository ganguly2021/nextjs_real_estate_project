import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

function SearchFilters() {
  const [filters, setFilters] = useState({});


  return <div>SearchFilters</div>;
}

export default SearchFilters;
