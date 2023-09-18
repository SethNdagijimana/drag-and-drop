"use client"

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd"

// import { Card, CardContent, CardMedia } from "@mui/material"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import Image from "next/image"
import { useState } from "react"

import cars from "../items/cars.json"

interface CarProps {
  id: number
  name: string
  image: string
  description: string
}

const Car = () => {
  const [items, setItems] = useState<CarProps[]>(cars)

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ) {
    const nextState = swap(items, sourceIndex, targetIndex)
    setItems(nextState)
  }

  return (
    <div>
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={3}
          rowHeight={400}
          style={{ height: 280 * Math.ceil(items.length / 4) }}
        >
          {items.map((item: CarProps) => (
            <GridItem key={item.id}>
              <Card className="cursor-pointer space-x-5">
                <Image src={item.image} width={400} height={100} alt="image" />

                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  )
}

export default Car
