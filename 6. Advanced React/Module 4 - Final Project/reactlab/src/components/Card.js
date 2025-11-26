import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor="white"
      align="stretch"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />

      <VStack spacing={2} align="start" px={4} pb={4}>
        <Heading as="h3" size="sm" color="gray.800">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <HStack spacing={2} pt={2} color="gray.700" cursor="pointer">
          <Text fontWeight="semibold" fontSize="sm">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
