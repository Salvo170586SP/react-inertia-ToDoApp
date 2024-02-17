export default function CardTodo({ todo, handleChangeFavorite, handleDelete }) {
    return (
        <div
            className={`${
                todo.is_complete == 1
                    ? " dark:bg-gray-800 bg-slate-100 text-black  "
                    : " dark:bg-gray-700/90  bg-slate-50  text-black  "
            } w-full md:w-[44rem] shadow-xl rounded-3xl  mb-3 `}
        >
            <div className="flex justify-between items-center">
                {/* is favourite */}
                <button
                    className="w-[120px]   w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-3xl rounded-br-xl"
                    onClick={(e) => {
                        e.preventDefault();
                        handleChangeFavorite(todo.id);
                    }}
                >
                    {todo.is_complete == 0 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="black "
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>
                {/* end is favourite */}

                {/* delete */}
                <div x-data={`{delete${todo.id} : false}`}>
                    <button
                        x-on:click={`delete${todo.id} = !delete${todo.id}`}
                        className=" w-[120px] bg-red-600 dark:bg-red-900 px-4 py-2 text-sm font-bold text-white rounded-bl-xl rounded-tr-3xl"
                    >
                        ELIMINA
                    </button>

                    <div
                        x-show={`delete${todo.id}`}
                        className="fixed inset-0 z-50 overflow-y-auto"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                            <div
                                x-cloak="true.toString()"
                                x-on:click={`delete${todo.id} = false`}
                                x-show={`delete${todo.id}`}
                                x-transition:enter="transition ease-out duration-300 transform"
                                x-transition:enter-start="opacity-0"
                                x-transition:enter-end="opacity-100"
                                x-transition:leave="transition ease-in duration-200 transform"
                                x-transition:leave-start="opacity-100"
                                x-transition:leave-end="opacity-0"
                                className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-60"
                                aria-hidden="true"
                            ></div>

                            <div
                                x-cloak="true.toString()"
                                x-show={`delete${todo.id}`}
                                x-transition:enter="transition ease-out duration-300 transform"
                                x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
                                x-transition:leave="transition ease-in duration-200 transform"
                                x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
                                x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                className="w-[350px]  inline-block w-full max-w-xl p-8 my-5 overflow-hidden text-left transition-all transform bg-slate-100 dark:bg-gray-900 dark:text-gray-400 rounded-3xl shadow-xl 2xl:max-w-2xl"
                            >
                                <div className="flex items-center justify-between space-x-4">
                                    <h1 className="text-xl font-medium  ">
                                        Attenzione
                                    </h1>

                                    <button
                                        x-on:click={`delete${todo.id} = false`}
                                        className=" focus:outline-none hover:text-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <p className="mt-2 text-md  ">
                                    Sei sicuro di eliminare{" "}
                                    {todo.title.toUpperCase()}?
                                </p>
                                <button
                                    className=" w-full bg-red-600 dark:bg-red-700 mt-5 rounded-xl px-4 py-3 text-sm font-bold text-white  "
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        handleDelete(todo.id);
                                    }}
                                >
                                    ELIMINA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end delete */}
            </div>

            {/* box content card */}
            <button x-on:click={`info${todo.id} = true`} className="w-full">
                <div className="grid grid-cols-6 p-5 gap-y-2">
                    <div>
                        <figure className="w-[60px] h-[60px]  ">
                            {todo.img_url ? (
                                <img
                                    src={"/storage/" + todo.img_url}
                                    className="rounded-full border w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src="http://hwr.org.uk/wp-content/uploads/2016/11/placeholder-dark-600-400-729dad18518ecd2cd47afb63f9e6eb09.jpg"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            )}
                        </figure>
                    </div>

                    <div className="col-span-5 md:col-span-4 ml-4 px-3">
                        <p className="dark:text-sky-500 text-start text-sm font-bold ">
                            {todo.title.toUpperCase()}
                        </p>

                        <p
                            style={{
                                wordWrap: "break-word",
                            }}
                            className="dark:text-gray-400  text-start font-bold text-sm"
                        >
                            {todo.description}
                        </p>
                    </div>
                </div>
                <div className="flex   md:justify-center">
                    <small className="dark:text-gray-400  py-1 ml-5 md:ml-0">
                        creazione/modifica: {todo.updated_at.slice(0, 10)}
                    </small>
                </div>
            </button>
            {/* end box content card */}
        </div>
    );
}
