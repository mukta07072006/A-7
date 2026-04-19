
import React, { useEffect, useState } from 'react';

const UseApps = () => {

    const [friend, setFriend] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(()=>{
        const datafetch = async ()=> {
            const res = await fetch("/data.json")
            const data = await res.json()
            // console.log(data);

            setTimeout(() => {
                setFriend(data)
                setLoading(false)
            }, 2000);
        }
        datafetch()
    },[])
    return {friend, loading}
};

export default UseApps;