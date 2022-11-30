import { Badge ,Flex, Box, Stack, Text } from "@chakra-ui/react"

export const BuySection : React.FC  = () => {
  return (
    <Flex direction="row" justify="space-between" mt="3.9rem">
        <Stack direction="column">
            <Flex gap="1.6rem">
              <Text fontSize="1.6rem" fontWeight="bold">
                  $ 125.00
              </Text>
              <Badge fontSize="1.6rem" colorScheme="orange" variant="subtle">
                  50%
              </Badge>
            </Flex>
            <Text as="span" fontSize="1.3rem" fontWeight="bold" color="dark.grayBlue" textDecoration="line-through">$250</Text>

        </Stack> 
        <Box> 
        

        </Box>

    </Flex>
  )
}
