"use client"
import UseApps from '@/hooks/useApps';
import React from 'react';
import FriendCard from './friendCard';
import LogoLoader from '@/app/loading';

const friends = () => {

    const {friend, loading} = UseApps()

        if (loading) {
            return <LogoLoader />;
        }



    return (
        <div>
            <h1 className='text-2xl font-semibold mt-5 '>Your Friends</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 mb-10'>

                {
                    friend.map(friend => <FriendCard key={friend.id} friend={friend}> </FriendCard> )
                }

            </div>
        </div>
    );
};

export default friends;