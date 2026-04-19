"use client"
import useApps from "@/hooks/useApps";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import Friends from "@/component/friends";



export default function Home() {

  const {friend, loading} = useApps()

  return (
      <div className="px-25">
      <div className="text-center flex flex-col">

        <h1 className="text-4xl font-bold text-gray-800 mt-10 ">Friends to keep close in your life</h1>
        <p className="text-sm font-regular text-gray-600 mt-2">Your personal shelf of meaningful connections. Browse, tend, and nurture the
            <br></br> relationships that matter most.</p>

        <button className="flex gap-1 bg-[#244D3F] btn text-white self-center mt-4"><FaPlus/>Add Friend</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white shadow-sm rounded-sm p-5 text-center">
          <h1 className="text-3xl font-bold text-[#244D3F]">{friend.length}</h1>
          <p>Total Friends</p>
        </div>
        <div className="bg-white shadow-sm rounded-sm p-5 text-center">
          <h1 className="text-3xl font-bold text-[#244D3F]">5</h1>
          <p>On Track</p>
        </div>
        <div className="bg-white shadow-sm rounded-sm p-5 text-center">
          <h1 className="text-3xl font-bold text-[#244D3F]">10</h1>
          <p>Need Attention</p>
        </div>
        <div className="bg-white shadow-sm rounded-sm p-5 text-center">
          <h1 className="text-3xl font-bold text-[#244D3F]">64</h1>
          <p>Interaction this month</p>
        </div>
      </div>
      <Friends/>
      </div>
  );
}
