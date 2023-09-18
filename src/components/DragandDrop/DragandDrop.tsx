"use client"

import { useState } from "react"
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd"

interface DragandDropProps {
  name: string
  items: string[]
}

const DragandDrop = ({ name }: DragandDropProps) => {
  const [items, setItems] = useState<string[]>([])

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
          boxesPerRow={4}
          rowHeight={280}
          className="grid grid-cols-2 w-[800px] mx-auto h-[700px] mt-4  space-5"
        >
          <GridItem>
            <div className="bg-red-500 h-full gap-2">red</div>
          </GridItem>

          <GridItem>
            <div className="bg-green-500 h-full ">Green</div>
          </GridItem>

          <GridItem>
            <div className="bg-blue-500 h-full">Blue</div>
          </GridItem>

          <GridItem>
            <div className="bg-yellow-500 h-full">Yellow</div>
          </GridItem>
        </GridDropZone>
      </GridContextProvider>
    </div>
  )
}

export default DragandDrop
