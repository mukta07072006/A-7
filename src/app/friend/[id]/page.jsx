"use client"
import { FaArchive } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineSnooze } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import UseApps from '@/hooks/useApps';
import Image from 'next/image';
import React, { use, useContext } from 'react'; 
import { FaVideo } from "react-icons/fa6";
import { IoMdText } from "react-icons/io";
import { toast } from "react-toastify";
import { Hubballi } from "next/font/google";
import Context from "@/context/file";
import LogoLoader from "@/app/loading";


const Page = ({ params }) => {
  
    const resolvedParams = use(params); 
    const {friend, loading} = UseApps();
    const context = useContext(Context);
    const {notification, setNotification} = context;

    if (loading) {
        return <LogoLoader />;
    }

    const expectedFriend = friend?.find(fr => fr.id === parseInt(resolvedParams.id));

    const addNotification = (items)=>{
        const newNotification = {
            id: new Date().getTime(),
            name: expectedFriend.name,
            time: new Date().toLocaleString(),
            type: items,}
  
        setNotification((prev) => [...prev, newNotification]);
        toast.success(`${items} added successfully`);
    }

    const edit = ()=>{
        toast.error("Not implemented yet");
    }

    return (
        <div className="p-5 px-5 lg:px-25">
            {expectedFriend ? ( 
                <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center mt-20">
                    <div className="col-span-2 ">
                    <div className='p-5 rounded-lg shadow-sm flex flex-col justify-center items-center '>
                                <div className='h-15 w-15 rounded-full overflow-hidden '>
                    
                                   <Image src={expectedFriend.picture} alt='' className='rounded-full w-full h-full object-cover' width={50} 
                                         height={50}></Image>
                                </div>
                                
                    
                                <h1 className='font-semibold text-xl mt-3'>{expectedFriend.name}</h1>
                                <p className='text-sm text-gray-600'>{expectedFriend.days_since_contact}d ago</p>
                                
                                <div className={`badge rounded-full  ${expectedFriend.status=== "overdue" ? 'bg-red-500 text-white' : `${expectedFriend.status === "on track" ? 'bg-green-950 text-white' : 'bg-yellow-500 text-white'}`}`}>{expectedFriend.status}</div>
                                <div className='flex gap-3 items-center mt-2'>
                                        {
                                        expectedFriend.tags.map(tag => <div key={tag} className="badge bg-green-100 text-green-800">{tag}</div>)
                                    }
                                    </div>
                                <h1 className="text-sm text-gray-400 mt-3">"{expectedFriend.bio}"</h1>
                                <h1 className="text-sm text-gray-400 mt-3">{expectedFriend.email}</h1>
                            </div>
                            <div className="rounded-lg shadow-sm p-4 mt-5 flex items-center gap-3 justify-center">
                        <MdOutlineSnooze />
                        <h1 className="text-md font-semibold">Snooze 2 Weeks</h1>
                    </div>
                    <div className="rounded-lg shadow-sm p-4 mt-5 flex items-center gap-3 justify-center">
                        <FaArchive />
                        <h1 className="text-md font-semibold">Archive</h1>
                    </div>
                    <div className="rounded-lg shadow-sm p-4 mt-5 flex items-center text-red-700 gap-3 justify-center">
                        <MdDeleteOutline />
                        <h1 className="text-md font-semibold">Delete</h1>
                    </div>
                    </div>
                    <div className="col-span-3 ml-0 lg:ml-5 ">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                                        <div className="text-center px-8 py-6 rounded-xl shadow-sm"><h1 className="text-2xl font-bold text-green-800">{expectedFriend.days_since_contact}</h1><p> days since contact</p></div>
                                        <div className="text-center px-8 py-6 rounded-xl shadow-sm"><h1 className="text-2xl font-bold text-green-800">{expectedFriend.goal}</h1><p> days Goal</p></div>
                                        <div className="text-center px-8 py-6 rounded-xl shadow-sm"><h1 className="text-2xl font-bold text-green-800">{expectedFriend.next_due_date}</h1><p>Next Due</p></div>
                                    </div>
                                    <div className="text-start px-8 py-4 rounded-xl shadow-sm mt-5 relative"><h1 className="text-lg text-green-800">RelatioNship Goal</h1><p className="text-gray-600 mt-3">CoNtact every <span className="font-bold">2 weeks</span></p>
                                    <button onClick={()=>edit( )} className="btn absolute top-2 right-2">Edit</button>
                                    </div>
                                     <div className="text-start px-8 py-4 rounded-xl shadow-sm mt-5"> 
                                        <h1 className="text-lg text-green-800">Quick Check IN</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                                            <button onClick={()=> addNotification("call")} className="bg-gray-50 border-1 border-gray-400 text-center px-8 py-4 flex flex-col gap-3 justify-center items-center cursor-pointer rounded-xl">
                                                <IoIosCall className="text-3xl"/>
                                                <p className="text-xl">Call </p>
                                            </button>
                                            <button onClick={()=> addNotification("text")} className="bg-gray-50 border-1 border-gray-400 text-center px-8 py-4 flex flex-col gap-3 justify-center items-center cursor-pointer rounded-xl">
                                                <IoMdText className="text-3xl"/>
                                                <p className="text-xl ">Text</p>
                                            </button>
                                            <button onClick={()=> addNotification("videoCall")} className="bg-gray-50 border-1 border-gray-400 text-center px-8 py-4 flex flex-col gap-3 justify-center items-center cursor-pointer rounded-xl">
                                                <FaVideo className="text-3xl"/>
                                                <p className="text-xl ">Video Call</p>
                                            </button>
                                        </div>
                                    </div>
                    </div>
                    
                </div>
            ) : ( 
                <p>Friend not found</p>
            )}
        </div>
    );
};

export default Page;