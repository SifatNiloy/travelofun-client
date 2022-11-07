import { useEffect, useState } from "react";

const useOrder=()=>{
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://secure-shelf-54719.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setOrder(data))
    });
    return [order, setOrder];
}

export default useOrder;