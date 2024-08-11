import { Link } from 'react-router-dom'
import CatGif from '../../assets/404.webp'

export default function Error() {
    return (
        <>
            <main className="grid h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="flex h-full flex-col items-center justify-center">
                    <p className="text-base font-semibold text-[#171716]">
                        404
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Vous êtes perdu ?
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Désolé, la page que vous cherchez n'existe pas.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Retour à l'accueil{' '}
                        </Link>
                        <Link
                            to="mailto:support@initum.fr"
                            className="text-sm font-semibold text-gray-900"
                        >
                            Contacter le support{' '}
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                    <img src={CatGif} alt="404" className="mt-16 max-h-44" />
                </div>
            </main>
        </>
    )
}
