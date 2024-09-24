import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const Profile = ({ userId }: { userId: string }) => {
  return (
    <div className="flex gap-6 pt-5">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.unsplash.com/photo-1720743453691-268baa850b5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.unsplash.com/photo-1726534168836-59dff8524925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 -bottom-12 m-auto ring-4 ring-white z-10"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Edward elger</h1>
            <div className="flex items-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1,3k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">588</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="yep" />
      </div>
    </div>
  );
};

export default Profile;
