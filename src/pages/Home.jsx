import { useEffect } from "react";
import Button from "../components/Button";
import Cities from "../components/Cities";
import Header from "../components/Header";
import Property from "../components/Property";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { setPropertyArr } from "../redux/feature/property";

export default function Home() {
  const dispatch = useDispatch();

  let url = `${import.meta.env.VITE_BASE_URL}/property.json`;
  let options = {
    headers: { "Content-Type": "application/json" },
  };

  const getHotels = async () => {
    let response = await fetch(url, options);
    let data = await response.json();
    dispatch(setPropertyArr(data.slice(0, 6)));
  };

  const handleViewMore = async () => {
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="min-h-screen bg-indigo-50 px-16 py-3">
      <Header />
      <Cities />
      <Property />
      <div className="grid place-items-center mb-7">
        <Button
          isActive={true}
          text={"Show More"}
          icon={<LiaHourglassStartSolid />}
          iconStyle="-order-1"
          handleSubmit={handleViewMore}
        />
      </div>
    </div>
  );
}
