"use client"
import React, { useEffect, useState } from 'react';
import ContextProvider from './file';

const Context = ({children}) => {
    const [notification, setNotification] = useState([]);
    const data = {
        notification,
        setNotification,
    }
    console.log(notification, "Context");
    useEffect(() => {
        localStorage.setItem("notifications", JSON.stringify(notification));
    }, [notification]);

    return (
       <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
    );
};

export default Context;