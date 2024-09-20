import Image from "next/image"

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg overflow-x-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Abdi</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Abdi</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Abdi</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Abdi</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Abdi</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Abdi</span>
        </div>
      </div>
    </div>
  )
}

export default Stories
