import { useEffect, useState } from "react";

const useOrder=()=>{
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://travelofun-server.onrender.com')
            .then(res => res.json())
            .then(data => setOrder(data))
    });
    return [order, setOrder];
}

export default useOrder;