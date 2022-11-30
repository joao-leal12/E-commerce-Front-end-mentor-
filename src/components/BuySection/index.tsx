import { Badge ,Flex,Stack, Text, Box, Button} from "@chakra-ui/react"
import {Plus, Minus, ShoppingCart} from 'phosphor-react'
export const BuySection : React.FC  = () => {
  return (
    <Flex direction="column" justify="space-between" mt="3.9rem" gap="4rem">
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
        <Flex direction="row" gap="1.6rem"> 
          <Flex direction="row" alignItems="center" gap="4.5rem"> 
            <Minus size={20} weight="bold" color="#FF7D1C"/> 
            <Box as="span" fontSize="1.6rem">0</Box>
            <Plus size={20} color="#FF7D1C"  weight="bold"/> 
          </Flex> 
          <Button leftIcon={<ShoppingCart/>} colorScheme="orange" size="lg">
              Add to cart
          </Button>

        </Flex>

    </Flex>
  )
}
