
import { Flex, Text, Heading } from '@chakra-ui/react'
import { BuySection } from '../BuySection'
export const HeroInfors = () => {
  return (
    <Flex direction="column" px="2.7rem">
          <Text 
            color="brand.100" 
            fontWeight="bolder" 
            mt="2.6rem" 
            fontSize="1.6rem"
            letterSpacing="2px">SNEAKERS COMPANY</Text>
          <Heading  mt={["1rem", "1rem", "2.9rem", "2.9rem  "]} fontSize="3.5rem" >Fall Limited Edition Sneakers </Heading> 
          <Text fontSize="1.6rem" color="gray.100" mt={["1.5rem", "1.5rem", "4.9rem", "4.9rem"]}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withsand everything the weather can offer </Text> 
         <BuySection/> 
    </Flex>
  )
}
