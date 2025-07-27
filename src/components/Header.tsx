import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className=" bg-yellow-400/50 border-b-2 shadow-xl border-yellow-500 p-5">
        <div className="mx-auto container">
            <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0">
                <img className="w-40" src="/logo.png" alt="" />

                <nav className="flex justify-center items-center gap-2">
                    <NavLink to={"/"}
                    className={({isActive}) => isActive ? "uppercase text-gray-800 font-bold" : " text-white font-bold uppercase" }>Inicio</NavLink>

                    <NavLink to={"/favorites"}
                    className={({isActive}) => isActive ? "uppercase text-gray-800 font-bold" : " text-white font-bold uppercase" }>Favoritos</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}
