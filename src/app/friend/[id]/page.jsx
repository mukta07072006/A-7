
import UseApps from '@/hooks/useApps';
import React from 'react';

const page = async ({params}) => {
    const data = await params;
    const [friend, loading] = UseApps()

    const expectedFriend = friend.find(fr => fr.id === data.id )
    console.log(expectedFriend);g

    
    console.log(data.id);
    return (
        <div>
           {/* {
            friend && 
           } */}
        </div>
    );
};

export default page;