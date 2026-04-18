import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const friendCard = ({friend}) => {
    // console.log(friend);+
    
    return (
        <div>
       <Link href={`/friend/${friend.id}`}>
        <div className='p-5 rounded-lg shadow-sm flex flex-col justify-center items-center'>
            <div className='h-15 w-15 rounded-full overflow-hidden '>

            <Image src={friend.picture} alt='' className='rounded-full w-full h-full object-cover' width={50} 
  height={50}></Image>
            </div>
            

            <h1 className='font-semibold text-xl mt-3'>{friend.name}</h1>
            <p className='text-sm text-gray-600'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-3 items-center mt-1'>
                {
                friend.tags.map(tag => <div key={tag} class="badge bg-green-100 text-green-800">{tag}</div>)
            }
            </div>
            <div class={`badge rounded-full mt-3 ${friend.status=== "overdue" ? 'bg-red-500 text-white' : `${friend.status === "on track" ? 'bg-green-950 text-white' : 'bg-yellow-500 text-white'}`}`}>{friend.status}</div>
        </div>
       </Link>
        </div>
    );
};

export default friendCard;