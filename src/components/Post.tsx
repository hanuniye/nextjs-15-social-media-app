import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1719937050445-098888c0625e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
            width={40}
            height={40}
          />
          <span className="font-medium">Abdi said</span>
        </div>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      {/* DESC  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.unsplash.com/photo-1601656269222-fda862e6dc7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          suscipit delectus pariatur aut impedit illo ullam unde quae alias
          temporibus. Eaque ducimus aliquid necessitatibus obcaecati aut unde
          voluptas voluptatem soluta.
        </p>
      </div>
      {/* INTERECTION  */}
      <div className="flex justify-between items-center text-sm my-4">
        <div className="flex gap-4">
          <div className="flex gap-4 p-2 bg-slate-50 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex gap-4 p-2 bg-slate-50 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">comments</span>
            </span>
          </div>
        </div>
        <div className="flex gap-4 p-2 bg-slate-50 rounded-xl">
          <Image
            src="/share.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            123 <span className="hidden md:inline">shares</span>
          </span>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
