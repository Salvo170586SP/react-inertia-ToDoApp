import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import CardTodo from "@/Components/CardTodo";

export default function Dashboard({ auth, todos, todo }) {
    const title = useRef();
    const { errors } = usePage().props;
    const fileInputRef = useRef(null);

    const { data, setData } = useForm({
        title: "",
        description: "",
        img_url: null,
    });

    /* CREATE */
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("todos.store"), data, {
            onError: () => title.current.focus(),
        });
        fileInputRef.current.value = null;
        setData({ ...data, title: "", description: "", img_url: null });
    };

    /* DELETE */
    const handleDelete = (todoId) => {
        router.delete(route("todos.destroy", todoId));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    /* CHANGE FAVORITE */
    const handleChangeFavorite = (todoId) => {
        router.get(route("todos.isComplete", todoId));
    };

    /* FAVORITE SHOW */
    const [showFavorites, setShowFavorites] = useState(false);
    const handleShowFavorites = () => {
        setShowFavorites(!showFavorites);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="pt-3  ">
                <div className=" mx-5">
                    <div className="flex justify-center">
                        {/* CREATE TODO */}
                        <div
                            x-data="{ open: false }"
                            className="flex justify-center items-center min-h-scren"
                        >
                            <div className="fixed bottom-4 w-full md:flex md:justify-center px-4">
                                <button
                                    id="createBtn"
                                    x-on:click="open = true"
                                    className="bg-gray-600 shadow-xl dark:bg-gray-700 w-full md:w-44 flex  justify-center items-center text-white rounded-3xl px-2 py-5"
                                >
                                    <div className="flex flex-col items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6  "
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15"
                                            />
                                        </svg>
                                        <small className="font-bold">
                                            crea todo
                                        </small>
                                    </div>
                                </button>
                            </div>
                            <div
                                x-show="open"
                                className="fixed inset-0 z-50 overflow-hidden"
                            >
                                <div
                                    x-show="open"
                                    x-transition:enter="transition-opacity ease-out duration-300"
                                    x-transition:enter-start="opacity-0"
                                    x-transition:enter-end="opacity-100"
                                    x-transition:leave="transition-opacity ease-in duration-300"
                                    x-transition:leave-start="opacity-100"
                                    x-transition:leave-end="opacity-0"
                                    className="absolute inset-0 bg-black"
                                ></div>
                                <section className="absolute inset-y-0 flex">
                                    <div
                                        x-show="open"
                                        x-transition:enter="transition-transform ease-out duration-300"
                                        x-transition:enter-start="transform translate-x-full"
                                        x-transition:enter-end="transform translate-x-0"
                                        x-transition:leave="transition-transform ease-in duration-300"
                                        x-transition:leave-start="transform translate-x-0"
                                        x-transition:leave-end="transform translate-x-full"
                                        className="w-screen max-w-md "
                                    >
                                        <div className="h-full w-screen  bg-slate-300 dark:bg-black dark:border-gray-700 dark:text-white text-black   flex flex-col py-6 shadow-xl">
                                            <div className="flex items-center justify-between px-4">
                                                <h2 className="text-xl font-semibold  ">
                                                    Crea Todo
                                                </h2>
                                                <button
                                                    x-on:click="open = false"
                                                    className="text-gray-500 dark:text-white hover:text-gray-700"
                                                >
                                                    <svg
                                                        className="h-6 w-6"
                                                        x-description="Heroicon name: x"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>

                                            <form
                                                onSubmit={handleSubmit}
                                                encType="multipart/form-data"
                                            >
                                                <div className="mt-4 px-4">
                                                    <input
                                                        name="title"
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={data.title}
                                                        placeholder="Titolo"
                                                        ref={title}
                                                        className="w-full p-2 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                    />
                                                    <div className="h-[20px] text-red-500">
                                                        {errors.title}
                                                    </div>
                                                </div>

                                                <div className="mt-4 px-4 ">
                                                    <textarea
                                                        name="description"
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={data.description}
                                                        placeholder="descrizione"
                                                        className="w-full p-2 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                    ></textarea>
                                                </div>
                                                <div className="mt-4 px-4 ">
                                                    <input
                                                        ref={fileInputRef}
                                                        type="file"
                                                        name="img_url"
                                                        className="w-full p-2 "
                                                        onChange={(e) =>
                                                            setData(
                                                                "img_url",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="px-4  fixed bottom-5 w-full md:flex md:justify-center">
                                                    <button
                                                        x-on:click="open = false"
                                                        className="w-full md:w-44 bg-gray-600 dark:bg-gray-700 rounded-3xl  px-2 py-5  text-white"
                                                    >
                                                        AGGIUNGI
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        {/* END CREATE TODO */}
                    </div>

                    <div className="flex flex-col justify-center items-center py-28">
                        {todos.length === 0 ? (
                            <div className="flex flex-col items-center mt-20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8 dark:text-gray-300 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>
                                <span className="dark:text-gray-300 text-gray-500 font-bold text-xl">
                                    CREA UNA TODO
                                </span>
                            </div>
                        ) : (
                            <div className="w-full md:w-[100px] mb-4 ">
                                <button
                                    onClick={handleShowFavorites}
                                    className={`${
                                        showFavorites === true
                                            ? " dark:bg-slate-700  dark:hover:text-slate-100   bg-slate-100  "
                                            : "bg-transparent"
                                    } text-slate-500 dark:text-slate-300 shadow-md font-bold border dark:border-slate-600 border-slate-400    rounded-2xl px-4 py-3 `}
                                >
                                    preferiti
                                </button>
                            </div>
                        )}

                        {todos.map((todo) => {
                            if (
                                !showFavorites ||
                                (showFavorites && todo.is_complete === 1)
                            ) {
                                return (
                                    <div key={todo.id}>
                                        <div
                                            x-data={`{info${todo.id} : false }`}
                                            className="flex justify-center items-center emin-h-scren"
                                        >
                                            <CardTodo
                                                todo={todo}
                                                handleChangeFavorite={
                                                    handleChangeFavorite
                                                }
                                                handleDelete={handleDelete}
                                            />

                                            {/* detail todo */}
                                            <div
                                                x-show={`info${todo.id}`}
                                                className="fixed inset-0 z-50 overflow-hidden"
                                            >
                                                <section className="absolute inset-y-0 flex">
                                                    <div
                                                        x-show={`info${todo.id}`}
                                                        x-transition:enter="transition-transform ease-out duration-200"
                                                        x-transition:enter-start="transform translate-x-full"
                                                        x-transition:enter-end="transform translate-x-0"
                                                        x-transition:leave="transition-transform ease-in duration-200"
                                                        x-transition:leave-start="transform translate-x-0"
                                                        x-transition:leave-end="transform translate-x-full"
                                                        className="w-screen  max-w-md "
                                                    >
                                                        <div className="h-full w-screen backdrop-blur-sm bg-slate-300  dark:bg-black dark:border-gray-700 dark:text-white text-black   flex flex-col py-6 shadow-xl">
                                                            <div className="flex items-center justify-between px-4">
                                                                <div className="flex items-center">
                                                                    <h2 className="text-xl font-semibold me-32 ">
                                                                        Dettagli
                                                                        Todo
                                                                    </h2>
                                                                    <Link
                                                                        className="dark:bg-gray-700 bg-gray-700 text-white rounded-xl py-2 px-5"
                                                                        href={`dashboard/todos/${todo.id}`}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"
                                                                            fill="currentColor"
                                                                            className="w-6 h-6"
                                                                        >
                                                                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                                            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                                        </svg>
                                                                    </Link>
                                                                    {/* modifica */}
                                                                    {/*   <div
                                                                    x-data={`{edit${todo.id}: false}`}
                                                                >
                                                                    <button
                                                                        x-on:click={`edit${todo.id} = true`}
                                                                        className="dark:bg-gray-800 bg-blue-700 text-white rounded-xl py-2 px-5"
                                                                    >
                                                                        Modifica
                                                                    </button>
                                                              
                                                                   
                                                                    <div
                                                                        x-show={`edit${todo.id}`}
                                                                        className="fixed inset-0 z-50 overflow-y-auto"
                                                                        aria-labelledby="modal-title"
                                                                        role="dialog"
                                                                        aria-modal="true"
                                                                    >
                                                                        <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                                                                            <div
                                                                                x-cloak
                                                                                x-on:click={`edit${todo.id} = false`}
                                                                                x-show={`edit${todo.id}`}
                                                                                x-transition:enter="transition ease-out duration-300 transform"
                                                                                x-transition:enter-start="opacity-0"
                                                                                x-transition:enter-end="opacity-100"
                                                                                x-transition:leave="transition ease-in duration-200 transform"
                                                                                x-transition:leave-start="opacity-100"
                                                                                x-transition:leave-end="opacity-0"
                                                                                className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-40"
                                                                                aria-hidden="true"
                                                                            ></div>

                                                                            <div
                                                                                x-cloak
                                                                                x-show={`edit${todo.id}`}
                                                                                x-transition:enter="transition ease-out duration-300 transform"
                                                                                x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                                                x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
                                                                                x-transition:leave="transition ease-in duration-200 transform"
                                                                                x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
                                                                                x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                                                className="w-[350px]  inline-block w-full max-w-xl p-8 my-5 overflow-hidden text-left transition-all transform bg-white dark:bg-gray-900 dark:text-gray-400 rounded-3xl shadow-xl 2xl:max-w-2xl"
                                                                            >
                                                                                 <form
                                                                                    onSubmit={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.preventDefault();
                                                                                        handleEdit(
                                                                                            todo.id
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    <div className="mt-4">
                                                                                        <input
                                                                                            name="title"
                                                                                            type="text"
                                                                                            value={
                                                                                                data.title 
                                                                                            }
                                                                                            onChange={handleChange}
                                                                                            placeholder="Titolo"
                                                                                            className="w-full p-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                                                        />
                                                                                    </div>

                                                                                    <div className="mt-4  ">
                                                                                        <textarea
                                                                                            rows={5}
                                                                                            name="description"
                                                                                            type="text"
                                                                                            value={
                                                                                              data.description 
                                                                                            }
                                                                                            onChange={handleChange}
                                                                                            placeholder="descrizione"
                                                                                            className="w-full p-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                                                        ></textarea>
                                                                                    </div>

                                                                                    <div className="mt-4   ">
                                                                                        <button
                                                                                            x-on:click={`edit${todo.id} = false`}
                                                                                            className="w-full bg-blue-700 dark:bg-gray-700 rounded-2xl  px-4 py-3  text-white"
                                                                                        >
                                                                                            MODIFICA
                                                                                        </button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                    {/* end modifica */}
                                                                </div>

                                                                <button
                                                                    x-on:click={`info${todo.id} = false`}
                                                                    className="text-gray-500 dark:text-white hover:text-gray-700"
                                                                >
                                                                    <svg
                                                                        className="h-6 w-6"
                                                                        x-description="Heroicon name: x"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M6 18L18 6M6 6l12 12"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <div className="mt-10 px-5  mx-auto">
                                                                <div>
                                                                    <figure className="w-full    md:w-[700px] md:h-[400px] overflow-hidden ">
                                                                        {todo.img_url ? (
                                                                            <img
                                                                                src={
                                                                                    "/storage/" +
                                                                                    todo.img_url
                                                                                }
                                                                                className="rounded-2xl w-full h-full object-cover"
                                                                            />
                                                                        ) : (
                                                                            <img
                                                                                src="http://hwr.org.uk/wp-content/uploads/2016/11/placeholder-dark-600-400-729dad18518ecd2cd47afb63f9e6eb09.jpg"
                                                                                className="rounded-2xl w-full h-full object-cover"
                                                                            />
                                                                        )}
                                                                    </figure>
                                                                </div>
                                                                <h2 className="text-3xl mt-10">
                                                                    {todo.title}
                                                                </h2>
                                                                <p className="text-lg">
                                                                    {
                                                                        todo.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            {/* end detail card */}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
