import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center} from "@chakra-ui/react"
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"



const ItemDetail = ({ productos }) => {
    const { id } = useParams()

    const filteredProducts = productos.filter((producto) => producto.id === id)

    return (
        <div>
            {filteredProducts.map((p) => {
                return(
                    <div key={p.id}>
                        <Center p="1rem">
                            <Card>
                                <CardHeader>
                                    <Heading size="md">{p.nombre}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <text>{p.descripcion}</text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                </CardFooter>
                            </Card>
                        </Center>

                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail
