import Button from "./Button";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove, BsBuildings } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Property() {
  const navigation = useNavigate();
  const { propertyArr } = useSelector((state) => state.property);
  return (
    <section className="grid gap-7 py-7 items-center justify-center grid-cols-3">
      {/* Property Cards */}
      {propertyArr.map((obj) => {
        const { hotel_id, hotel_name, addressline1, photos } = obj;
        const hotelName =
          hotel_name.length > 27 ? `${hotel_name.slice(0, 24)}...` : hotel_name;
        const address =
          addressline1.length > 40
            ? `${addressline1.slice(0, 35)}...`
            : addressline1;
        return (
          <div
            key={hotel_id}
            className="bg-gray-50 w-5/6 p-2 shadow-lg rounded-xl mx-auto cursor-pointer"
            onClick={() => navigation(`/property/${hotel_id}`)}
          >
            <div className="relative">
              <div
                id="sliderContainer"
                className="rounded-xl h-56 w-full flex relative overflow-x-scroll snap-mandatory snap-x"
              >
                {photos.map((imgUrl) => (
                  <img
                    key={imgUrl}
                    src={imgUrl}
                    alt=""
                    className="relative snap-center object-fill rounded-xl h-56 w-full"
                  />
                ))}
              </div>
              <div className="absolute top-3 px-3 flex justify-between w-full">
                <span className="cursor-pointer bg-slate-50 rounded-full text-sm font-bold text-indigo-600 py-1 px-3">
                  For Sale
                </span>
                <span className="cursor-pointer w-7 h-7 grid place-items-center bg-slate-50 rounded-full font-bold text-indigo-600">
                  <AiOutlineHeart />
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="relative grid gap-y-3 py-5 px-4">
              <div className="rounded-md absolute -top-4 -left-4">
                <div className="z-10 relative font-medium text-sm text-white py-2 px-5 rounded-md rounded-bl-none bg-indigo-700">
                  Popular
                </div>
                <div className="z-0 w-2 absolute -bottom-1.5 h-4 rounded-bl-full bg-indigo-900"></div>
              </div>
              <h3 className="flex mt-2 items-center text-sm font-semibold">
                <MdOutlineLocationOn className="text-yellow-700 mr-1.5" />
                {address}.
              </h3>
              <h1 className="text-xl font-bold">{hotelName}</h1>

              <div className="flex space-x-3 justify-evenly text-sm font-medium">
                <h3 className="leading-9">
                  <BsBuildings className="text-xl" /> 3 Rooms
                </h3>
                <h3 className="leading-9">
                  <IoBedOutline className="text-xl" /> 4 Beds
                </h3>
                <h3 className="leading-9">
                  <LiaBathSolid className="text-xl" /> 1 Bath
                </h3>
                <h3 className="leading-9">
                  <BsArrowsMove className="text-xl" /> 752 sft
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-1 items-center justify-center ">
                  <h1 className="text-xl font-bold text-indigo-700">$7999</h1>
                  <sub className="font-medium text-sm"> /month</sub>
                </div>
                <Button text={"Read More"} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
