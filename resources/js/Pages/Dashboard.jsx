import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard({ auth, todos }) {
    const { data, setData } = useForm({
        title: "",
        description: "",
        img_url: "",
    });

    /* isCompleteRoute */
    const handleComplete = (todoId) => {
        router.get(route("todos.isComplete", todoId));
    };

    /* CREATE */
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("todos.store"), data);
    };

    /* useEffect(() => {
        setData({
            title: todo?todo.title,
            description: todo?todo.description
         });
    }, []); */

    /*  EDIT */
    const handleEdit = (todoId) => {
        router.post(route("todos.update", todoId), data);
    };

    /* DELETE */
    const handleDelete = (todoId) => {
        router.delete(route("todos.destroy", todoId));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className=" mx-5">
                    <div className="flex justify-center">
                        <div
                            x-data="{ open: false }"
                            className="flex justify-center items-center emin-h-scren"
                        >
                            <button
                                id="createBtn"
                                x-on:click="open = true"
                                className="shadow-xl shadow-white/100 dark:shadow-gray-900/100 bg-blue-900    dark:bg-gray-700  w-[350px] h-[60px] flex  justify-center items-center   fixed bottom-4  text-white rounded-3xl px-5 py-5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-9 h-9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </button>

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
                                    className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
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
                                        <div className="h-full w-screen backdrop-blur-sm bg-white/90 dark:bg-gray-900/70 dark:border-gray-700 dark:text-white text-black   flex flex-col py-6 shadow-xl">
                                            <div className="flex items-center justify-between px-4">
                                                <h2 className="text-xl font-semibold  ">
                                                    Aggiungi Todo
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
                                                        className="w-full p-2 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                    />
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
                                                {/*  <div className="mt-4 px-4 ">
                                                    <input
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
                                                </div> */}
                                                <div className="mt-4 px-4  fixed bottom-5">
                                                    <button
                                                        x-on:click="open = false"
                                                        className="w-[350px] h-[60px] bg-blue-700 dark:bg-gray-700 rounded-2xl  px-3 py-2  text-white"
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
                    </div>

                    <div className="flex flex-col justify-center items-center mt-8">
                        {todos.map((todo) => {
                            return (
                                <div  key={todo.id}>
                                    <div
                                        x-data="{ info: false }"
                                        className="flex justify-center items-center emin-h-scren"
                                    >
                                        {/* CARD */}
                                        <div
                                            className={`  ${
                                                todo.is_complete == 1
                                                    ? " dark:bg-gray-800/50  bg-blue-900"
                                                    : " dark:bg-gray-700/50 bg-blue-600    "
                                            } w-[22rem] shadow-xl rounded-3xl  mb-3 `}
                                        >
                                            <div className="flex justify-between items-center">
                                                <button
                                                    className="w-[120px] bg-sky-900 dark:bg-sky-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-3xl rounded-br-xl"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleComplete(todo.id);
                                                    }}
                                                >
                                                    {todo.is_complete == 0
                                                        ? "INCOMPLETO"
                                                        : "COMPLETO"}
                                                </button>

                                                {/* delete */}

                                                <div x-data="{ modelOpen: false }">
                                                    <button
                                                        x-on:click="modelOpen =!modelOpen"
                                                        className=" w-[120px] bg-red-600 dark:bg-red-700 w-fit px-4 py-1 text-sm font-bold text-white rounded-bl-xl rounded-tr-3xl"
                                                    >
                                                        ELIMINA
                                                    </button>

                                                    <div
                                                        x-show="modelOpen"
                                                        className="fixed inset-0 z-50 overflow-y-auto"
                                                        aria-labelledby="modal-title"
                                                        role="dialog"
                                                        aria-modal="true"
                                                    >
                                                        <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                                                            <div
                                                                x-cloak
                                                                x-on:click="modelOpen = false"
                                                                x-show="modelOpen"
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
                                                                x-show="modelOpen"
                                                                x-transition:enter="transition ease-out duration-300 transform"
                                                                x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                                x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
                                                                x-transition:leave="transition ease-in duration-200 transform"
                                                                x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
                                                                x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                                className="w-[350px]  inline-block w-full max-w-xl p-8 my-20 overflow-hidden text-left transition-all transform bg-white dark:bg-gray-900 dark:text-gray-400 rounded-3xl shadow-xl 2xl:max-w-2xl"
                                                            >
                                                                <div className="flex items-center justify-between space-x-4">
                                                                    <h1 className="text-xl font-medium  ">
                                                                        Attenzione
                                                                    </h1>

                                                                    <button
                                                                        x-on:click="modelOpen = false"
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
                                                                    Sei sicuro
                                                                    di eliminare{" "}
                                                                    {todo.title.toUpperCase()}
                                                                    ?
                                                                </p>
                                                                <button
                                                                    className=" w-full bg-red-600 dark:bg-red-700 mt-5 rounded-xl px-4 py-3 text-sm font-bold text-white  "
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault();
                                                                        e.stopPropagation();

                                                                        handleDelete(
                                                                            todo.id
                                                                        );
                                                                    }}
                                                                >
                                                                    ELIMINA
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* enddelete */}
                                            </div>

                                            <button x-on:click="info = true">
                                                <div className="grid grid-cols-6 p-5 gap-y-2">
                                                    <div>
                                                        <figure className="w-[60px] h-[60px]  ">
                                                            {todo.img_url ? (
                                                                <img
                                                                    src={
                                                                        "/storage/" +
                                                                        todo.img_url
                                                                    }
                                                                    className="rounded-full w-full h-full object-cover"
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
                                                        <p className="dark:text-sky-500 text-white font-bold text-xs">
                                                            {todo.title.toUpperCase()}
                                                        </p>

                                                        <p
                                                            style={{
                                                                wordWrap:
                                                                    "break-word",
                                                            }}
                                                            className="dark:text-gray-400 text-white font-bold"
                                                        >
                                                            {todo.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <small className="dark:text-gray-400  text-white  py-1 mr-5">
                                                        {todo.updated_at.slice(
                                                            0,
                                                            10
                                                        )}
                                                    </small>
                                                </div>
                                            </button>
                                        </div>

                                        {/* DETAIL */}
                                        <div
                                            x-show="info"
                                            className="fixed inset-0 z-50 overflow-hidden"
                                        >
                                            <div
                                                x-show="info"
                                                x-transition:enter="transition-opacity ease-out duration-300"
                                                x-transition:enter-start="opacity-0"
                                                x-transition:enter-end="opacity-100"
                                                x-transition:leave="transition-opacity ease-in duration-300"
                                                x-transition:leave-start="opacity-100"
                                                x-transition:leave-end="opacity-0"
                                                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                            ></div>
                                            <section className="absolute inset-y-0 flex">
                                                <div
                                                    x-show="info"
                                                    x-transition:enter="transition-transform ease-out duration-300"
                                                    x-transition:enter-start="transform translate-x-full"
                                                    x-transition:enter-end="transform translate-x-0"
                                                    x-transition:leave="transition-transform ease-in duration-300"
                                                    x-transition:leave-start="transform translate-x-0"
                                                    x-transition:leave-end="transform translate-x-full"
                                                    className="w-screen  max-w-md "
                                                >
                                                    <div className="h-full w-screen backdrop-blur-sm bg-white/90 dark:bg-gray-900/70 dark:border-gray-700 dark:text-white text-black   flex flex-col py-6 shadow-xl">
                                                        <div className="flex items-center justify-between px-4">
                                                            <div className="flex items-center">
                                                                <h2 className="text-xl font-semibold me-5 ">
                                                                    Dettagli
                                                                    Todo
                                                                </h2>

                                                                {/* modifica */}
                                                                <div x-data="{edit: false}">
                                                                    <button
                                                                        x-on:click="edit = true"
                                                                        className="dark:bg-gray-800 bg-blue-700 text-white rounded-xl py-2 px-5"
                                                                    >
                                                                        Modifica
                                                                    </button>

                                                                    <div
                                                                        x-show="edit"
                                                                        className="fixed inset-0 z-50 overflow-y-auto"
                                                                        aria-labelledby="modal-title"
                                                                        role="dialog"
                                                                        aria-modal="true"
                                                                    >
                                                                        <div className="flex items-end justify-center min-h-screen px-4 text-center md:items-center sm:block sm:p-0">
                                                                            <div
                                                                                x-cloak
                                                                                x-on:click="edit = false"
                                                                                x-show="edit"
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
                                                                                x-show="edit"
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
                                                                                            onChange={
                                                                                                handleChange
                                                                                            }
                                                                                            placeholder="Titolo"
                                                                                            className="w-full p-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                                                        />
                                                                                    </div>

                                                                                    <div className="mt-4  ">
                                                                                        <textarea
                                                                                            name="description"
                                                                                            type="text"
                                                                                            value={
                                                                                                data.description
                                                                                            }
                                                                                            onChange={
                                                                                                handleChange
                                                                                            }
                                                                                            placeholder="descrizione"
                                                                                            className="w-full p-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                                                                        ></textarea>
                                                                                    </div>

                                                                                    <div className="mt-4   ">
                                                                                        <button
                                                                                            x-on:click="open = false"
                                                                                            className="w-full bg-blue-700 dark:bg-gray-700 rounded-2xl  px-4 py-3  text-white"
                                                                                        >
                                                                                            MODIFICA
                                                                                        </button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <button
                                                                x-on:click="info = false"
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
                                                        <div className="mt-10  mx-auto">
                                                            <div>
                                                                <figure className="w-[350px] h-[300px]  ">
                                                                    {todo.img_url ? (
                                                                        <img
                                                                            src={
                                                                                "/storage/" +
                                                                                todo.img_url
                                                                            }
                                                                            className="rounded-full w-full h-full object-cover"
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
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
