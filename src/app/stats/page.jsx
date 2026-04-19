"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const StatsPage = () => { 
    const [data, setData] = useState([]);

    useEffect(() => {
        const saved = window.localStorage.getItem("notifications");
        if (saved) {
            setData(JSON.parse(saved));
        }
    }, []);

    const chartData = useMemo(() => {
        const count = {
            text: data.filter(item => item.type === "text").length,
            call: data.filter(item => item.type === "call").length,
            videoCall: data.filter(item => item.type === "Video Call" || item.type === "videoCall").length,
        }

        return [
            { name: "Text", value: count.text },
            { name: "Call", value: count.call },
            { name: "Video Call", value: count.videoCall },
        ].filter(item => item.value > 0);
    }, [data]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className="mt-20 px-24 my-20">
            <h1 className="text-5xl font-bold mb-5">Statistics</h1>
            <div className="bg-base-200 rounded-xl p-10" style={{ width: '100%', height: '400px' }}>
                <h1 className="text-xl font-medium">By Interaction Type</h1>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius="60%"
                            outerRadius="80%"
                            paddingAngle={5}
                            dataKey="value"
                            label
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};


export default StatsPage;