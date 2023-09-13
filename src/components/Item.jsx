import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading, GridItem, Grid} from "@chakra-ui/react"
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {
    console.log(producto)
  return (
    <div className='containerProduct Cardstyle'>
        <Card className='Cardstyle' maxW='sm'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{producto.nombre}</Heading>
                    <Text>
                    </Text>
                    <Text fontSize='2x1'>         
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        <Link to={`/item/${producto.id}`}>Detalle</Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Item
