import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { MdArrowRightAlt } from "react-icons/md";
const cities = ["New York", "Mumbai", "Paris", "London"];

export default function Cities() {
  const { pathname } = useLocation();
  return (
    <section className="flex justify-between mt-9">
      <div className="flex space-x-3">
        {cities.map((city) => (
          <Link key={city} to={`/property/${city.toLowerCase()}`}>
            <CitiesButton
              isActive={decodeURI(pathname.toLowerCase()).includes(
                city.toLowerCase()
              )}
              city={city}
            />
          </Link>
        ))}
      </div>
      <div className="">
        <Button text={"View All"} icon={<MdArrowRightAlt />} />
      </div>
    </section>
  );
}

export function CitiesButton({ isActive, city }) {
  return (
    <button
      className={`${
        isActive ? "bg-indigo-700 text-white" : "bg-slate-200"
      } px-5 py-2 rounded-full font-medium text-sm`}
    >
      {city}
    </button>
  );
}
