import { Link, Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <header className="mx-5 mt-5">
                <nav className="flex items-center justify-between rounded-full px-10 py-5 ">
                    <div>
                        <Link
                            to="/home"
                            className="text-2xl font-bold text-[#171716]"
                        >
                            <span className="font-medium">ini</span>tum.
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <Link
                            to="/contact"
                            className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold transition hover:bg-neutral-800"
                        >
                            Obtenir un devis
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
            <footer className="bg-black py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="">
                            <h3 className="mb-4 text-lg font-semibold">
                                Informations
                            </h3>
                            <p>
                                <Link
                                    className="text-gray-400 hover:underline"
                                    to="tel:+33752701742"
                                >
                                    <i className="bi bi-telephone mr-1"></i>
                                    07 52 70 17 42
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="mailto:contact@initum.fr"
                                    className="text-gray-400 hover:underline"
                                >
                                    <i class="bi bi-envelope mr-1"></i>
                                    contact@initum.fr
                                </Link>
                            </p>
                        </div>
                        <div className="">
                            <h3 className="mb-4 text-lg font-semibold">
                                Liens rapides
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to="/home"
                                        className="hover: text-gray-400"
                                    >
                                        Accueil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/team"
                                        className="hover: text-gray-400"
                                    >
                                        Equipe
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="hover: text-gray-400"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="hover: text-gray-400"
                                    >
                                        À propos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="mb-4 text-lg font-semibold">
                                Réseaux sociaux
                            </h3>
                            <ul className="flex space-x-4">
                                {/* <li>
                                    <Link
                                        to="#"
                                        className="hover: text-gray-400"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="hover: text-gray-400"
                                    >
                                        <i className="bi bi-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="hover: text-gray-400"
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        to="https://www.linkedin.com/company/theinitum"
                                        className="hover: text-gray-400"
                                        target="_blank"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold tracking-tight  sm:text-4xl">
                                S'inscrire à la newsletter
                            </h2>
                            <p class="mt-4 text-lg leading-8 text-gray-300">
                                Recevez les dernières nouvelles de notre
                                entreprise directement dans votre boîte de
                                réception.
                            </p>
                            <div class="mt-6 flex gap-x-4">
                                <label for="email-address" class="sr-only">
                                    Adresse e-mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    required
                                    class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    placeholder="Entrez votre adresse e-mail"
                                />
                                <button
                                    type="submit"
                                    class="flex-none rounded-md bg-[#E4E2DD] px-3.5 py-2.5 text-sm font-semibold text-[#171716] shadow-sm"
                                >
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            © 2024 initum. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Root
