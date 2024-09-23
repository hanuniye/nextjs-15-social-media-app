import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex gap-2 justify-between flex-wrap">
        <div className="relative w-[30%] h-24">
          <Image
            src="https://images.unsplash.com/photo-1725714354969-15e3f95fcb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-[30%] h-24">
          <Image
            src="https://images.unsplash.com/photo-1725714354969-15e3f95fcb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-[30%] h-24">
          <Image
            src="https://images.unsplash.com/photo-1725714354969-15e3f95fcb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-[30%] h-24">
          <Image
            src="https://images.unsplash.com/photo-1725714354969-15e3f95fcb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-[30%] h-24">
          <Image
            src="https://images.unsplash.com/photo-1725714354969-15e3f95fcb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-[30%] h-24">
          <Image
            src="https://images.unsplash.com/photo-1725714354969-15e3f95fcb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
