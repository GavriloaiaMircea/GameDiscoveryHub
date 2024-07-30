import { HStack, Skeleton, SkeletonText, Box } from "@chakra-ui/react";


const GenreListSkeleton = () => {
  return (
    <HStack spacing={4} paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <Box flex="1">
        <SkeletonText noOfLines={1} width="80%" />
      </Box>
    </HStack>
  );
}

export default GenreListSkeleton;
