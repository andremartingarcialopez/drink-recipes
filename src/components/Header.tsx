import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import type { Search } from "../types/types";

export default function Header() {

    const { fetchCatgories, categories, fetchRecipeFilter, showNotification } = useAppStore();

    const [search, setSearch] = useState<Search>({
        ingredient: "",
        category: ""
    })

    /* Pasar saber en que pagina o path estamos */
    const location = useLocation();
    const isHomePage = useMemo(() => {
        return location.pathname == "/"
    }, [location.pathname]);

    /*Al iniciar la pagina carga las categorias*/
    useEffect(() => {
        fetchCatgories();
    }, [fetchCatgories]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setSearch({
            ...search,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (Object.values(search).some(value => value.trim() == "")) {
            showNotification({
                message: "Todos los campos son obligatorios",
                error: true,
                show: true
            })
            return
        }

        fetchRecipeFilter(search);
    }


    return (
        /*Para darle el efecto de oscuro al bg */
        <header className={`${isHomePage ? "bg-img" : "bg-yellow-500/50"} relative z-10 border-b-2 shadow-xl border-yellow-500 p-5`}>

            <div className="mx-auto container relative z-10">
                <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0">
                    <img className="w-40" src={isHomePage ? "/logo.png" : "/logoBlack.png"} alt="" />

                    <nav className="flex justify-center items-center gap-2">
                        <NavLink to={"/"}
                            className={({ isActive }) => isActive ? "uppercase text-yellow-500 font-bold" : " text-white font-bold uppercase"}>Inicio</NavLink>

                        <NavLink to={"/favorites"}
                            className={({ isActive }) => isActive ? "uppercase text-gray-800 font-bold" : " text-white font-bold uppercase"}>Favoritos</NavLink>
                    </nav>
                </div>

                {isHomePage &&
                    <form onSubmit={handleSubmit}
                        className="p-5 bg-white/10 backdrop-blur-xs rounded-lg my-5 md:w-1/2 shadow-2xl border border-slate-100 flex flex-col justify-center items-stretch space-y-3">
                        <div>
                            <label className="text-white font-bold uppercase"
                                htmlFor="ingredient">Ingrediente/Nombre</label>
                            <input className="w-full bg-white p-1 rounded-lg focus:outline-none"
                                placeholder="Ej. Tequila, Vodka, Cafe"
                                type="text"
                                id="ingredient"
                                value={search.ingredient}
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label className="text-white font-bold uppercase"
                                htmlFor="category">Categorias</label>
                            <select className="w-full bg-white p-1 rounded-lg focus:outline-none"
                                id="category"
                                value={search.category}
                                onChange={handleChange}>
                                <option value="">--Selecciona--</option>
                                {categories.map(function (category) {
                                    return (
                                        <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <input type="submit"
                            value={"Buscar"}
                            className="text-white bg-yellow-400 p-2 rounded-lg mt-3 hover:font-semibold cursor-pointer hover:bg-yellow-500  active:bg-yellow-500/70 active:text-white uppercase" />

                    </form>
                }
            </div>
        </header>

    )
}
