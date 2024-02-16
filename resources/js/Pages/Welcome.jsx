import { Link, Head } from "@inertiajs/react";
import logo from "../../../public/imgs/logo.png";
import screen1 from "../../../public/imgs/Screenshot1.png";
import screen2 from "../../../public/imgs/Screenshot2.png";
import screen3 from "../../../public/imgs/Screenshot3.png";
import screen5 from "../../../public/imgs/Screenshot5.png";
import screen6 from "../../../public/imgs/Screenshot6.png";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100   dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                LogIn
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold bg-gray-400 dark:bg-gray-600 rounded-2xl px-5 py-2  text-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Registrati
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex flex-col justify-center items-center">
                        <img src={logo} width={120} alt="logo" />
                        <h2 className="text-4xl dark:text-white font-bold font-mono">
                            TODOS WPA
                        </h2>
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8 ">
                            <div className="w-full  flex  flex-col md:flex-row justify-between items-center ">
                                <div className="flex flex-col justify-center p-10 text-center">
                                    <div className=" flex flex-col md:flex-row  items-center  md:items-center justify-center ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="red"
                                            className="w-12 h-12 md:me-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                                            />
                                        </svg>
                                        <h2 className="  text-xl font-semibold text-gray-900 dark:text-white">
                                            Non perdere niente
                                        </h2>
                                    </div>

                                    <p className="mt-4  md:w-[550px] text-gray-500 text-center dark:text-gray-400 text-sm leading-relaxed">
                                        Salva la tua mappa giornaliera e tutto
                                        ciò che vuoi in modo semplice e
                                        intuitivo
                                    </p>
                                </div>

                                <div className="flex  justify-center relative hover:scale-90 md:transition duration-75	 ease-in-out ">
                                    <figure className="w-[300px] h-[260px]   rounded-3xl">
                                        <img
                                            src={screen2}
                                            className="w-full h-full object-cover   shadow-xl rounded-3xl"
                                            alt="screen1"
                                        />
                                    </figure>
                                    <div className="absolute inset-0  dark:bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900   dark:opacity-50"></div>
                                </div>
                            </div>

                            <div className="w-full flex  flex-col-reverse md:flex-row justify-between items-center">
                                <div className="flex  justify-center relative hover:scale-90 md:transition duration-75	 ease-in-out ">
                                    <figure className="w-[300px] h-[260px]  bg-gray-100 rounded-3xl">
                                        <img
                                            src={screen5}
                                            className="w-full h-full object-cover   shadow-xl rounded-3xl"
                                            alt="screen1"
                                        />
                                    </figure>
                                    <div className="absolute inset-0  dark:bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900   dark:opacity-50"></div>
                                </div>

                                <div className="flex flex-col relative">
                                    <div className=" flex flex-col justify-center p-10 text-center ">
                                        <div className=" flex flex-col md:flex-row  items-center  md:items-center justify-center ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="red"
                                                className="w-12 h-12 md:me-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                                />
                                            </svg>

                                            <h2 className="  text-xl font-semibold text-gray-900 dark:text-white">
                                                Progressive Web App
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mt-4 md:w-[550px]  text-gray-500 text-center dark:text-gray-400 text-sm leading-relaxed">
                                        Creata appositamente per l'ambiente
                                        mobile senza installare nulla. Puoi
                                        aggiungere l'applicazione con pochi
                                        click dal tuo browser
                                    </p>
                                </div>
                            </div>

                            <div className="w-full  flex  flex-col md:flex-row justify-between items-center ">
                                <div className="flex flex-col justify-center p-10 text-center">
                                    <div className=" flex flex-col md:flex-row  items-center  md:items-center justify-center ">
                                        <i className="fa-solid fa-circle-half-stroke text-red-500 me-5 fa-2x"></i>
                                        <h2 className="  text-xl font-semibold text-gray-900 dark:text-white">
                                            Dark-mode integrata
                                        </h2>
                                    </div>

                                    <p className="mt-4  md:w-[550px] text-gray-500 text-center dark:text-gray-400 text-sm leading-relaxed">
                                        Per una ottimale integrazione vi
                                        offriamo la modalità scura automatica,
                                        in base alle impostazioni del vostro
                                        sistema
                                    </p>
                                </div>

                                <div className="flex justify-center relative hover:scale-90 md:transition duration-75	 ease-in-out ">
                                    <figure className="hover:scale-150 w-[300px] h-[260px] bg-gray-100   rounded-3xl">
                                        <img
                                            src={screen6}
                                            className="w-full h-full object-cover   shadow-xl rounded-3xl"
                                            alt="screen1"
                                        />
                                    </figure>
                                    <div className="absolute inset-0  dark:bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-900   dark:opacity-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800  bg-gray-300  flex   px-5 md:px-20 py-10   items-center  justify-between">
                <div className="text-center text-sm text-gray-500 dark:text-gray-200 sm:text-start">
                    <div className="flex items-center gap-4   ">
                        <a
                            href="https://github.com/Salvo170586SP"
                            className="group inline-flex flex-col  md:flex-row items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            <i className="fa-brands fa-github md:me-3"></i>
                           <small>My GitHub</small> 
                        </a>
                    </div>
                </div>

                <div className="ms-5 text-center text-sm text-gray-500 dark:text-gray-200 sm:text-end sm:ms-0">
                    Laravel v{laravelVersion} - Inertia
                    React
                </div>
            </div>
        </>
    );
}
