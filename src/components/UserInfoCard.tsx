import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-500">User information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Abdi said</span>
          <span className="text-sm">@Abdisaid</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quas
          culpa eveniet quibusdam eos itaque nemo accusantium officia.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>bosaso</b>
          </span>
        </div>
        <div className="flex items-center gap-2 capitalize">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            went to <b>edger high school</b>
          </span>
        </div>
        <div className="flex items-center gap-2 capitalize">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            work at <b>apple inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">
              han.dev
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined Nov 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 p-2 rounded-lg text-white text-sm">Follow</button>
        <span className="text-xs text-red-400 self-end cursor-pointer">Block user</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
