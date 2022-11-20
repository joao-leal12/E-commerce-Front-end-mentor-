import { Badge ,Flex, Box, Stack, Text } from "@chakra-ui/react"

export const BuySection : React.FC  = () => {
  return (
    <Flex direction="row" justify="space-between">
        <Stack direction="row">
            <Text>
                $ 125.00
            </Text>
            <Badge>
                50% 
            </Badge>
        </Stack> 
        <Box> 


        </Box>

    </Flex>
  )
}
