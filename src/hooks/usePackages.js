import { useEffect, useState } from "react";

const usePackages=()=>{
    const [packages, setpackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setpackages(data))
    });
    return [packages, setpackages];
}

export default usePackages;