import React from 'react'
import { Wrap, Flex, WrapItem, Link  } from '@chakra-ui/react'

export const MenuElements : React.FC = () => {
  return (
    <Flex>  
        <Wrap>

            <WrapItem>
                <Link>Collections</Link>
            </WrapItem>
            <WrapItem>
                <Link>Men</Link>
            </WrapItem>
            <WrapItem>
                <Link>Women</Link>
            </WrapItem>
            <WrapItem>
                <Link>About</Link>
            </WrapItem>



        </Wrap>
    </Flex> 
  )
}
