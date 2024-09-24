import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Add from "./Add";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="flex flex-col gap-2 bg-white shadow-md p-4 rounded-lg text-sm text-gray-500">
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My posts</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/market.png" alt="" width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/courses.png" alt="" width={20} height={20} />
          <span>Courses</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>lists</span>
        </Link>
        <hr className="border-t-2 border-y-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <Add size="sm" />
    </div>
  );
};

export default LeftMenu;
