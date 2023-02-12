import {useState} from "react";

const useWSData = ip => {
    const [data, setData] = useState('no daa')
    const ws = new WebSocket(ip);

    ws.onopen = () => {
        // connection opened
        ws.send('something'); // send a message
    };

    ws.onmessage = (e) => {
        // a message was received
        //console.dir(e.data)
        const obj = JSON.parse(e.data);
        //console.log(typeof (obj))
        setData(obj)

    };

    ws.onerror = (e) => {
        // an error occurred
        console.log(e.message);
    };

    ws.onclose = (e) => {
        // connection closed
        console.log(e.code, e.reason);
    };

    return {"data": data}
};

export default useWSData ;