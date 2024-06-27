import { FaMoon, FaTools } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";
import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";
import { PiCampfireFill } from "react-icons/pi";
const CharacterSheet = () => {
  const [current, setCurrent] = useState(10);
  const max = 12;

  const handleChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 0), max);
    setCurrent(value);
  };
  return (
    <div
      className="flex flex-col items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: 'url("images/dnd-bg.png")' }}
    >
      <div className="mt-4 container text-gray-100 ">
        <div className="w-full flex justify-end">
          <button className="hover:bg-primary transition px-2 py-2 rounded-md flex gap-2 items-center">
            <FaTools /> Manage Sheet
          </button>
        </div>

        <section className="flex w-full justify-between mt-2 gap-2">
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex bg-primary justify-end rounded-md p-3">
              <div className="flex w-full gap-4">
                <div className="flex flex-col items-center w-[20%] justify-end p-2 relative">
                  <img
                    src="images/dnd-logo.png"
                    alt="Character Avatar"
                    className="w-32 h-32 rounded-md absolute top-[-50%] border-2 border-red-500 bg-primary"
                  />
                  <button className="p-2 border border-gray-100 rounded-md">
                    Level Up
                  </button>
                </div>
                <div className="flex flex-col text-sm">
                  <h2 className="my-2 font-medium text-xl">ThorBorn Jr. </h2>
                  <p>Human</p>
                  <p>Fighter | 1</p>
                  <p>Adventurer (Dungeon Delver)</p>
                  <p>Exp: 0/300</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col justify-end gap-2">
                  <div className="text-2xl font-medium bg-gray-900 border border-gray-400 p-3">
                    +2
                  </div>
                  <p className="text-center text-xs">Proficiency Bonus</p>
                </div>
                <div className="flex flex-col justify-center gap-2 text-sm">
                  <div className="flex gap-2 justify-end text-gray-300 text-2xl">
                    <IoIosHelpCircle />
                    <IoMdSettings />
                  </div>
                  <button className="p-2 bg-secondary rounded-md">
                    +1 Initiative
                  </button>
                  <button className="p-2 bg-secondary flex gap-1 items-center rounded-md">
                    <HiOutlineLightBulb />
                    Inspiration
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-primary rounded-md p-3">
              <div className="flex font-medium text-xs justify-between items-center">
                <p>HIT POINTS</p>
                <div className="flex text-gray-300 gap-2 justify-end text-2xl">
                  <IoIosHelpCircle />
                  <IoMdSettings />
                </div>
              </div>
              <div className="text-lg font-medium flex gap-2 items-center justify-between">
                <div className="flex flex-col items-center bg-primary p-4 rounded-lg ">
                  <div className="flex border border-gray-700 items-center text-white text-2xl justify-center px-2 h-11">
                    <input
                      type="number"
                      value={current}
                      onChange={handleChange}
                      className="bg-transparent  border-none text-center w-8 focus:outline-none"
                    />
                    <span className="mx-2 text-gray-400 px-1">-</span>
                    <p className="">{max}</p>
                  </div>
                  <div className="relative w-full h-1 bg-gray-700 rounded">
                    <div
                      className="absolute top-0 left-0 h-1 bg-green-500 rounded"
                      style={{ width: `${(current / max) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between w-full text-gray-400 text-sm mt-2">
                    <span>Current</span>
                    <span>Max</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 items-center">
                  <input
                    id="temp_hp"
                    type="number"
                    className="text-center bg-primary border-gray-400 border w-12 h-12"
                  />
                  <label htmlFor="temp_hp" className="text-sm ">
                    Temp
                  </label>
                </div>
                <div className="flex justify-center items-center gap-4">

                <div className="flex flex-col justify-center items-center gap-1">
                  <button className="p-3 bg-secondary  rounded-md w-12 h-12 flex justify-center items-center">
                    <FaHeartCircleMinus className="text-red-500" />
                  </button>
                  <p className="text-sm">Damage</p>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <input
                    id="heal_dmg"
                    type="number"
                    className="text-center bg-primary border-gray-400 border w-24 h-12"
                  />
                <label htmlFor="heal_dmg" className="text-sm ">
                    ---
                </label>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <button className="p-3 bg-secondary  rounded-md w-12 h-12 flex justify-center items-center">
                    <FaHeartCirclePlus className="text-green-500" />
                  </button>
                  <p className="text-sm">Heal</p>
                </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center">
                    <button className="bg-secondary p-2 rounded-md flex gap-2 items-center w-full"><PiCampfireFill /> Short Rest </button>
                    <button className="bg-secondary p-2 rounded-md flex gap-2 items-center w-full"><FaMoon /> Long Rest </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 border border-white bg-primary rounded-md">
            Right
          </div>
        </section>
      </div>
    </div>
  );
};

export default CharacterSheet;
