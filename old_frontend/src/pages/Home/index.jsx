import { Link, ScrollRestoration } from 'react-router-dom'
import LogoReact from '../../assets/logo_reactjs.png'
import LogoDjango from '../../assets/logo_django.png'
import LogoNode from '../../assets/logo_node.png'
import LogoDocker from '../../assets/logo_docker.png'
import PPAbubakar from '../../assets/pp_abubakar.png'
import PPYassine from '../../assets/pp_yassine.png'
import {
    GlobeAltIcon,
    ShoppingCartIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Site web de présentation',
        description:
            'Obtenez votre site vitrine simple pour booster votre image sur le web.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Application web interactive',
        description:
            'Obtenez une application web complète et interactive pour vos utilisateurs.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Site e-commerce sécurisé',
        description:
            'Obtenez votre site e-commerce sécurisé pour vendre vos produits en ligne.',
        icon: ShoppingCartIcon,
    },
    {
        name: 'Application mobile',
        description:
            'Obtenez votre application mobile pour être présent sur IOS et Android.',
        icon: DevicePhoneMobileIcon,
    },
]

const people = [
    {
        name: 'Yassine ANZAR BASHA',
        role: 'Développeur Full Stack',
        imageUrl: PPYassine,
        linkedin: 'https://linkedin.com/in/yanzarbasha',
    },
    {
        name: 'Abubakar ALIEV',
        role: 'Développeur Back End',
        imageUrl: PPAbubakar,
        linkedin: 'https://www.linkedin.com/in/alieva/',
    },
]
export default function Home() {
    return (
        <>
            <main className="mb-16 px-8">
                <div className="mx-auto max-w-2xl py-24">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Obtenez un site internet à votre image.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Nous créons des solutions innovantes afin de booster
                            votre image sur le web.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Contactez-nous
                            </Link>
                            <Link
                                to="/about"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                À propos <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl rounded-3xl bg-black px-16 py-12  md:rounded-full">
                    <h2 className="text-center text-lg font-semibold leading-8">
                        Nous travaillons avec les meilleures technologies du
                        marché
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                            src={LogoReact}
                            alt="React"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                            src={LogoDjango}
                            alt="Django"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                            src={LogoNode}
                            alt="Node"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain invert filter lg:col-span-1"
                            src={LogoDocker}
                            alt="Docker"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
                <div className="mx-auto mt-10 py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Rencontrez notre équipe
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Nous sommes une équipe de passionnés qui mettons
                            tout en oeuvre pour vous satisfaire.
                        </p>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-1 lg:grid-cols-2 lg:gap-y-12">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="sm:cols-span-2 flex flex-col items-center gap-x-6 p-10 sm:flex-row">
                                        <img
                                            className="max-w-44 flex-shrink-0 rounded-full grayscale"
                                            src={person.imageUrl}
                                            alt=""
                                        />

                                        <div className="mt-5 text-center sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                                {person.name}
                                            </h3>
                                            <p className="text-sm font-semibold leading-6 text-gray-600">
                                                {person.role}
                                            </p>
                                            <p>
                                                <Link
                                                    to={person.linkedin}
                                                    className="bi bi-linkedin text-md text-black"
                                                ></Link>
                                            </p>
                                            <p>
                                                <Link
                                                    to="/team"
                                                    className="text-sm font-semibold leading-6 text-gray-900"
                                                >
                                                    En savoir plus{' '}
                                                    <span aria-hidden="true">
                                                        →
                                                    </span>
                                                </Link>
                                            </p>
                                            <p class="mt-2">
                                                <Link
                                                    target="_blank"
                                                    to={person.linkedin}
                                                    className="bi bi-linkedin text-xl"
                                                ></Link>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mx-auto mb-24 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                            Découvrez nos services
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Nous proposons des services sécurisés et fiables en
                            constante évolution.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid grid-cols-1 items-center gap-y-4 sm:gap-y-5 lg:max-w-none lg:grid-cols-2 lg:gap-16 xl:gap-20">
                            {features.map((feature) => (
                                <Link to="/contact">
                                    <div
                                        key={feature.name}
                                        className="h-full transform rounded-3xl border bg-black p-10  transition duration-300 hover:scale-105"
                                    >
                                        <dt className="text-base font-semibold leading-7">
                                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                                                <feature.icon
                                                    className="h-6 w-6 text-[#171716]"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-2 text-base leading-7">
                                            {feature.description}
                                        </dd>
                                        <dd>
                                            <span className="text-sm font-semibold leading-6 ">
                                                En savoir plus{' '}
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </span>
                                        </dd>
                                    </div>
                                </Link>
                            ))}
                        </dl>
                    </div>
                </div>
                <ScrollRestoration />
            </main>
        </>
    )
}
