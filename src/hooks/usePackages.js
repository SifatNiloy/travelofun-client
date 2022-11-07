import { useEffect, useState } from "react";

const usePackages=()=>{
    const [packages, setpackages] = useState([]);
    useEffect(() => {
        fetch('https://secure-shelf-54719.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setpackages(data))
    });
    return [packages, setpackages];
}

export default usePackages;