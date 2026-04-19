"use client"
import Context from "@/context/file";
import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";


const page = () => {

    const context = useContext(Context)
    const {notification} = context; 
    console.log(notification, "Timeline");

    const [displayList, setDisplayList] = useState(notification);

    const sortedNotifications = JSON.parse(localStorage.getItem("notifications"));


    const filter = (type) => {
        if (type === "all") {
            setDisplayList(sortedNotifications);
        }
        else {
            const filtered = sortedNotifications.filter(item => item.type === type);
            setDisplayList(filtered);
        }
    }

    if (!notification || notification.length === 0) {
        return (
            <div className="px-25 mt-20 h-fit text-center">
                <h1 className="text-4xl font-bold text-green-900 my-40">No History available.</h1>
            </div>
        );
    }

    return (
        <div className="px-25 mt-20">
            <h1 className="text-5xl font-bold">Timeline</h1>
                <div class="dropdown">
                        <div tabindex="0" role="button" class="btn border bg-white border-gray-200 w-xs mt-5 m-1">Filter Timeline <FaAngleDown /></div>
                            <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <button className="btn btn-ghost text-start" onClick={() => filter("text")}>
                                    Text
                                </button>
                                <button className="btn btn-ghost text-start" onClick={() => filter("call")}>
                                    Call
                                </button>
                                <button className="btn btn-ghost text-start" onClick={() => filter("videoCall")}>
                                    Video Call
                                </button>
                            </ul>
            </div>

            <div className="my-6">
                {
                    displayList?.map(item => 
                    <div className="p-4 rounded-lg border border-gray-200 w-full mt-3 flex items-center gap-4" key={item.id}>
                        <div>{item.type === "call" ? "☎️" : item.type === "text" ? "💬" : "📹"}</div>
                        <div>
                            <p className="text-lg text-black">You had a <span className="font-bold">{item.type}</span> with <span className="font-bold">{item.name}</span></p>
                            <p className="text-xs text-gray-400">{item.time}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;