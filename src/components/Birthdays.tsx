import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1726808260756-ec1d4eceaf71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Abdi said</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      <div className="flex items-center p-4 gap-4 bg-slate-100 rounded-md">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1">
          <span className="font-semibold text-gray-700">Upcomng Birthdays</span>
          <span className="text-gray-500">See other 16 have upcoming birthdays</span>
          <p></p>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
