import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex justify-between gap-4 text-sm">
      {/* AVATAR  */}
      <Image
        src="https://images.unsplash.com/photo-1726352535850-dc9b4ff460ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      {/* POST  */}
      <div className="flex-1">
        {/* TEXT INPUT  */}
        <div className="flex gap-4">
          <textarea name="" id="" placeholder="what's in your mind?" className="flex-1 bg-slate-100 rounded-lg p-2 outline-none"></textarea>
          <Image
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
            width={20}
            height={20}
          />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 flex-wrap text-gray-400 mt-4 capitalize">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addvideo.png" alt="" width={20} height={20} />
            video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
