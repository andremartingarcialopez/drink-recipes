import { Dialog, Transition } from '@headlessui/react';
import { Fragment, } from 'react';
import { useAppStore } from '../stores/useAppStore';
import type { RecipeDetails } from '../types/types';

export default function Modal() {

    const { modal, recipeDetails, closeModal, handleClickFav, favoriteExist } = useAppStore();

    /*Obtenemos los ingredientes ya que en la API aparecen de forma extraña*/
    function formatIngredinetsAndMeasure() {
        const ingredientAndMeasure = [];
        for (let i = 1; i <= 10; i++) {
            const ingredient = recipeDetails[`strIngredient${i}` as keyof RecipeDetails];
            const measure = recipeDetails[`strMeasure${i}` as keyof RecipeDetails];

            if (ingredient && measure) {
                ingredientAndMeasure.push(
                    <li key={i} className='text-lg font-light'>{`${ingredient} - ${measure}`}</li>
                )
            }
        }
        return ingredientAndMeasure
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10 my-2" onClose={() => closeModal()}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {recipeDetails.strDrink}
                                        <img className='my-5 rounded-lg w-80 mx-auto' src={recipeDetails.strDrinkThumb} alt={recipeDetails.strDrink} />
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades
                                        {formatIngredinetsAndMeasure()}
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instrucciones
                                        <p className='font-light text-lg'>{recipeDetails.strInstructions}</p>
                                    </Dialog.Title>
                                    <div className='flex flex-col md:flex-row justify-between items-stretch gap-3'>
                                        <button className='text-center w-full bg-yellow-400 hover:bg-yellow-600 p-2 rounded-lg text-white hover:font-semibold uppercase cursor-pointer active:bg-yellow-400'
                                            onClick={() => {
                                                handleClickFav(recipeDetails)
                                                closeModal()
                                            }}>{favoriteExist(recipeDetails.idDrink) ? "Eliminar de Favoritos" : "Agregar a Favoritos"}</button>

                                        <button className='text-center w-full bg-gray-400 hover:bg-gray-600 p-2 rounded-lg text-white hover:font-semibold uppercase cursor-pointer active:bg-gray-400'
                                            onClick={() => closeModal()}>Cerrar</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}