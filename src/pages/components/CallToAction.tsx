

export default function CallToAction() {

    return (
        <>
            <div className="w-full max-w-x center ">
                
                <form className="bg-white dark:bg-gray-900 shadow-md  px-8 pt-6 pb-8 mb-4 center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                    Interesado en contactar</h2>
                    <div className="mb-4">
                        <label className="block text-white-700 text-sm font-extrabold mb-2" htmlFor="Full name">
                            Nombre Completo
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center text-gray-900 font-bold leading-tight focus:outline-none focus:shadow-outline" id="full name" type="email" placeholder="Nombre Completo"/>
                        
                    </div>
                    <div className="mb-6">
                        <label className="block text-white-700 text-sm font-extrabold mb-2" htmlFor="Email">
                            Correo Electronico
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-center text-gray-900 font-bold mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Correo Electronico"/>
                            
                    </div>
                    <div className="mb-6">
                        <label className="block text-white-700 text-sm font-extrabold mb-2" htmlFor="telephone">
                            Numero telefonico
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-center text-gray-900 font-bold mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Correo Electronico"/>
                            
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                            >
                            Contactar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}