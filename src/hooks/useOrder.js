import { useEffect, useState } from "react";

const useOrder = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://travelofun-api.sifatniloy.top/")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  });
  return [order, setOrder];
};

export default useOrder;
