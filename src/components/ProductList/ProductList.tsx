import Image from "next/image"

interface ProductListProps {
  name?: string
  price?: string
  available?: boolean
  imageUrl: string
}

const ProductList = ({
  name,
  price,
  available,
  imageUrl
}: ProductListProps) => {
  return (
    <div>
      <div className="bg-[#f2f2f2]  w-full h-[354px]  space-y-6 md:space-y-0 relative">
        <Image
          src={imageUrl} // Use the imageUrl from props
          fill
          priority
          style={{ objectFit: "cover" }}
          alt="Product image"
        />
      </div>

      <div className="bg-[#FAFAFA] md:p-[10px] space-y-4 ">
        <div className="flex items-center  text-primary justify-between p-2">
          <p className="text-base">{name}</p>
          <p className={available ? "text-[#3A8A38]" : "text-[#B7001E]"}>
            {available ? "Available" : "Out of Stock"}
          </p>
        </div>
        <div className="p-2">
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductList
