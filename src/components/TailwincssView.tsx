

export const TailwincssView = () => {
  return (
    <>
        <div>
            <h2 className="text-center"> Vistas para practicar Tailwindcss</h2>
            <div className="container mx-auto">
                <button className="bg-blue-600 sm:bg-orange-400 lg:bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded "> 
                    Button 
                </button>    
            </div>    
            <div className="m-5 mt-10 p-5 border">
                <p className="text-xs sm:text-sm lg:text-xl text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt quisquam minima pariatur hic doloremque consequuntur quae, asperiores ut! Accusamus quos exercitationem sit itaque tempore ab quam ipsam tempora eos.
                </p>
            </div>
            <div className="mx-5">
                <h1 className="text-2xl w-96 shadow-xl rounded-2xl text-white text-center bg-pink-500 my-2 p-9">Esta es una linea con H1</h1> 
                <h2 className="text-l w-80 shadow-sm shadow-black text-green-600 text-right bg-slate-200 my-2 p-2">Esta es una linea con H1</h2> 
                <h3 className="text-sm shadow-lg w-64 text-blue-400 bg-slate-100 my-2 p-2">Esta es una linea con H1</h3> 
            </div>

            <div className="m-5 mt-10 p-5 border">
                <p className="text-xs sm:text-sm lg:text-xl text-justify">
                    <p className="text-transform: uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className="text-transform: lowercase">Quaerat incidunt quisquam minima pariatur hic doloremque consequuntur quae.</p>
                    <p className="text-transform: capitalize">asperiores ut! Accusamus quos exercitationem sit itaque. </p>
                    <p className="text-transform: normal-case">Tempore ab quam ipsam tempora eos.</p>
                </p>
            </div>

            <div className="container w-full mx-auto  shadow-slate-800 shadow-sm rounded-xl">
                <article className="bg-blue-600 text-white  px-8 py-8 flex justify-between rounded-t-xl">
                    <div className="text-bold text-4xl">
                        Learn Tailwindcss
                    </div>
                    <div className="text-lg text-bold flex  gap-x-4">
                        <button>Courses</button>
                        <button>Pricing</button>
                        <button>About</button>
                    </div>
                </article>
                <section className="p-16 bg-slate-50 rounded-b-xl mb-5">
                    <article className="bg-slate-300 rounded-xl p-9 flex-wrap gap-10 mb-5">
                        <h1 className="text-5xl font-bold mt-5">
                            Welcome to the TailwindCss practice
                        </h1>
                        <p className="my-6">
                            Discover a world of tailwind classes
                        </p>
                        <button type="button" className="bg-blue-500 rounded-md p-4 text-white font-bold mb-5">
                            Start learning
                        </button>
                    </article>
                    <p className="text-4xl font-bold pt-4">
                        Featured Courses
                    </p>
                </section>
            </div>
            <div>
                <h1 className="text-2xl text-center">Grid display 4 columns</h1>
                <div className="bg-yellow-200 grid grid-cols-12 gap-3">
                    <div className="bg-pink-500 text-white">1</div>
                    <div className="bg-pink-500 text-white">2</div>
                    <div className="bg-pink-500 text-white">3</div>
                    <div className="bg-pink-500 text-white">4</div>
                    <div className="bg-pink-500 text-white">5</div>
                    <div className="bg-pink-500 text-white">6</div>
                    <div className="bg-pink-500 text-white">7</div>
                    <div className="bg-pink-500 text-white">8</div>
                    <div className="bg-pink-500 text-white">9</div>
                    <div className="bg-pink-500 text-white">10</div>
                    <div className="bg-pink-500 text-white">11</div>
                    <div className="bg-pink-500 text-white">12</div>
                </div>
                <h1 className="text-2xl text-center mt-5">Grid display 12 cols, individual division</h1>
                <div className="bg-black grid grid-cols-12 gap-3">
                    <div className="bg-blue-300 col-span-3 text-white">A</div>
                    <div className="bg-blue-300 col-span-2 text-white">B</div>
                    <div className="bg-blue-300 col-span-4 text-white">C</div>
                    <div className="bg-blue-300 col-span-3 text-white">D</div>
                </div>
                <h1 className="text-2xl text-center mt-5">Grid display 12 cols, using like offset</h1>
                <div className="bg-black grid grid-cols-12 gap-3">
                    <div className="bg-blue-300 col-start-2 col-span-3 text-white">A</div>
                    <div className="bg-blue-300 col-start-6 col-span-2 text-white">B</div>
                    <div className="bg-blue-300 col-start-9 col-span-3 text-white">C</div>
                </div>
                <h1 className="text-2xl text-center mt-5">Grid display by rows</h1>
                <div className="bg-black grid grid-rows-4 gap-3">
                    <div className="bg-blue-300 col-start-2 col-span-3 text-white">A</div>
                    <div className="bg-blue-300 col-start-6 col-span-2 text-white">B</div>
                    <div className="bg-blue-300 col-start-9 col-span-3 text-white">C</div>
                </div>
            </div>
           
        </div>
    </>
  )
}
