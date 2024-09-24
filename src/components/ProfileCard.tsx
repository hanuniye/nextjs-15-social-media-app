import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-6 bg-white shadow-md p-4 rounded-lg">
      <div className="relative h-20">
        <Image
          src="https://images.unsplash.com/photo-1727162334294-170987f6b31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 rounded-full absolute left-0 right-0 m-auto -bottom-6 z-10 ring-white ring-2"
        />
      </div>
      <div className="flex flex-col items-center gap-2 h-20">
        <span className="font-semibold'">Edward evan</span>
        <div className="flex items-center gap-4">
            <div className="flex">
                <Image
                  src="https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3 rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3 rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3 rounded-full object-cover"
                />
            </div>
            <span className="text-gray-500 text-xs">500 followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
