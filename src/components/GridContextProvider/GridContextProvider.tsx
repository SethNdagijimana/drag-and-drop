"use client"

import React, { useState } from "react"

import {
  GridContextProvider as DndGridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd"
import ProductList from "../ProductList/ProductList"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface CarProps {
  id: number
  name: string
  image: string
  description: string
}

interface GridContextProviderProps {
  items: CarProps[]
}

const GridContextProvider: React.FC<GridContextProviderProps> = ({ items }) => {
  const [gridItems, setGridItems] = useState<CarProps[]>(items)

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ) {
    const nextState = swap(gridItems, sourceIndex, targetIndex)
    setGridItems(nextState)
  }

  return (
    <div className="">
      <DndGridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={3}
          rowHeight={400}
          className="w-full "
        >
          {gridItems.map((item: CarProps) => (
            <GridItem key={item.id}>
              <Card className="cursor-pointer space-x-5">
                <ProductList imageUrl="/1.jpg" />

                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </GridItem>
          ))}
        </GridDropZone>
      </DndGridContextProvider>
    </div>
  )
}

export default GridContextProvider
