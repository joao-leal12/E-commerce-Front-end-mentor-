import { Badge ,Flex, Box, Stack, Text } from "@chakra-ui/react"

export const BuySection : React.FC  = () => {
  return (
    <Flex direction="row" justify="space-between">
        <Stack direction="column">
            <Flex gap="1.6rem">
              <Text fontSize="1.6rem" fontWeight="bold">
                  $ 125.00
              </Text>
              <Badge fontSize="1.6rem" colorScheme="orange" variant="subtle">
                  50%
              </Badge>
            </Flex>
            <Text as="span">$250</Text>

        </Stack> 
        <Box> 
        

        </Box>

    </Flex>
  )
}
