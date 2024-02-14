import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function Edit({ auth, todo }) {
    const { data, setData } = useForm({
        title: "",
        description: "",
        img_url: "",
    });

    useEffect(() => {
        setData({
            title: todo?.title,
            description: todo?.description,
            img_url: todo?.img_url,
        });
    }, []);

    /*  EDIT */
    const handleEdit = (todoId) => {
        router.post(route("todos.update", todoId), data);
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
                    <div className="w-full flex flex-col justify-center items-center mt-20">
                        <div className="flex w-full text-center">
                            <Link
                                className="w-[350px] bg-gray-600 dark:bg-gray-700 rounded-2xl  px-4 py-4 mt-5 text-white"
                                href="/dashboard"
                            >
                                INDIETRO
                            </Link>
                        </div>
                        {/* modifica */}
                        <form
                        encType="multipart/form-data"
                            className="w-full mt-10"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEdit(todo.id);
                            }}
                        >
                            <div className="mt-4">
                                <input
                                    name="title"
                                    type="text"
                                    value={data.title}
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
                                    value={data.description || ""}
                                    onChange={handleChange}
                                    placeholder="descrizione"
                                    className="w-full p-2 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-2xl transition-colors duration-300"
                                ></textarea>
                            </div>
                            <div className="mt-4 px-4 ">
                                <input
                                    type="file"
                                    name="img_url"
                                    className="w-full p-2 "
                                    onChange={(e) =>
                                        setData("img_url", e.target.files[0])
                                    }
                                />
                            </div>
                            <div className="w-full fixed bottom-3 md:flex md:justify-center">
                                <button
                                    x-on:click={`edit${todo.id} = false`}
                                    className="w-[350px] bg-gray-600 dark:bg-gray-700 rounded-2xl  px-4 py-4  text-white"
                                >
                                    MODIFICA
                                </button>
                            </div>
                        </form>
                        {/* end modifica */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
