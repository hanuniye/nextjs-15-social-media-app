import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center">
      {/* LEFT  */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-lg text-blue-600">
          LAMASOCIAL
        </Link>
      </div>
      {/* CENTER  */}
      <div className="hidden md:flex items-center justify-between w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600 ">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/groups.png"
              alt="groups"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Groups</span>
          </Link>
        </div>
        <div className="hidden xl:flex items-center bg-slate-100 py-2 px-4 rounded-xl">
          <input type="text" placeholder="search....." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="flex justify-end items-center gap-4 xl:gap-6 w-[30%]">
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="people" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="messages"
                width={24}
                height={24}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="notifications"
                width={24}
                height={24}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="login" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
