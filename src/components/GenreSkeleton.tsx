import { HStack, List, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <HStack key={skeleton}>
          <Skeleton boxSize='32px' borderRadius={8} />
          <SkeletonText fontSize='lg'></SkeletonText>
        </HStack>
      ))}
    </List>
  );
};

export default GenreSkeleton;
