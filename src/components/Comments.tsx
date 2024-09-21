import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE  */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between gap-2 bg-slate-100 rounded-xl px-6 py-2 w-full">
          <input
            type="text"
            placeholder="write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS  */}
      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR  */}
        <Image
          src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        {/* DESC  */}
        <div className="flex-1 flex flex-col gap-2">
          <span className="font-medium">Abdi said</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed error
            deserunt consequatur nemo modi nisi beatae? Quia inventore odit
            porro deserunt eos quidem officiis sapiente tempore necessitatibus!
            Optio, nulla nobis!
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                123 <span> Likes</span>
              </span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>
        {/* MORE  */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;
