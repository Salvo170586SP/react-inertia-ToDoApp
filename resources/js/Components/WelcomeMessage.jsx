export default function WelcomeMessage({hideWelcomeScreen}) {
    return (
        <div className="md:h-[400px] md:w-[400px] p-9 mx-5 flex flex-col items-center justify-between shadow-xl rounded-2xl bg-slate-100 dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-700">
            <h2 className="text-2xl font-bold">BENVENUTO</h2>
            <p className="text-justify mt-2 italic">
                Incomincia subito a creare la tua lista cliccando il pulsante
                crea todo in basso. <br />
                Puoi creare, modificare, eliminare le tue todo e visualizzare i
                dettagli tappando semplicemente sulla card. <br />
                Inoltre potrai aggiungere un immagine identificativa, aggiungere
                le tue todo ai preferiti.
                <br />
                <br />
            </p>

            <button
                className="bg-blue-500 text-white px-5 py-2 rounded-xl dark:bg-gray-900"
                onClick={hideWelcomeScreen}
            >
                chiudi questo messaggio
            </button>
        </div>
    );
}
