import React, { useState, useEffect } from 'react';

const useWebSocketData = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = (event) => {
           // console.log('WebSocket connected:', event);
        };

        socket.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
        };

        socket.onerror = (error) => {
            //console.error('WebSocket error:', error);
        };

        return () => {
            //socket.close();
        };
    }, [url]);

    return data;
};

export default useWebSocketData;
