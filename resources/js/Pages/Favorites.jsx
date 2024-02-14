import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Favorites({ auth, todos }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Favorites" />

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
                        <div className="my-5">
                            <h2 className="font-bold dark:text-white">PREFERITI</h2>
                        </div>
                        <div className="mt-5">
                            {todos
                                .filter((todo) => todo.is_complete === 1)
                                .map((todo) => {
                                    return (
                                        <div
                                            className={`${
                                                todo.is_complete == 1
                                                    ? " dark:bg-gray-800/90   bg-slate-100 text-black  "
                                                    : " dark:bg-gray-700/90  bg-slate-50  text-black  "
                                            } w-[22rem] md:w-[44rem] shadow-xl rounded-3xl  mb-3 `}
                                        >
                                           
                                            {/* box card */}
                                            <div className="grid grid-cols-6 p-5 gap-y-2">
                                                <div>
                                                    <figure className="w-[60px] h-[60px]  ">
                                                        {todo.img_url ? (
                                                            <img
                                                                src={
                                                                    "/storage/" +
                                                                    todo.img_url
                                                                }
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
                                                            wordWrap:
                                                                "break-word",
                                                        }}
                                                        className="dark:text-gray-400  text-start font-bold text-sm"
                                                    >
                                                        {todo.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex   md:justify-center">
                                                <small className="dark:text-gray-400  py-1 ml-5 md:ml-0">
                                                    creazione/modifica:{" "}
                                                    {todo.updated_at.slice(
                                                        0,
                                                        10
                                                    )}
                                                </small>
                                            </div>
                                            {/* end box card */}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
