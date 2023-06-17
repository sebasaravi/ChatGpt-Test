'use client';

import axios from "axios";
import { eventNames } from "process";
import { useState, useEffect } from "react";

export default function Form() {
    
    

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                    Ingredientes</h2>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                        <textarea id="message" className="block p-2.5 w-full text-center text-gray-900 font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Escriba en este espacio los ingredientes que necesita para la receta"/>
                    </div>
                </div>
                <div className="">
                        <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                            >
                            Generar receta
                        </button>
                    </div>
                <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                    Receta</h3>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    
                    
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                        <textarea id="message" className="block p-2.5 w-full text-center text-gray-900 font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Aqui aparecera su receta"></textarea>
                    </div>
                    
                </div>

            </section>
        </>
    )
}