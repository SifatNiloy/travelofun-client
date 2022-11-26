import { useEffect, useState } from "react";

const usePackages=()=>{
    const [packages, setpackages] = useState([]);
    useEffect(() => {
        fetch('https://travelofun-server.onrender.com')
            .then(res => res.json())
            .then(data => setpackages(data))
    });
    return [packages, setpackages];
}

export default usePackages;