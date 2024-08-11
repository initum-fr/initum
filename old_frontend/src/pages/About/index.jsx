import PPYassine from '../../assets/pp_yassine.png'
import PPAbubakar from '../../assets/pp_abubakar.png'
import { Link } from 'react-router-dom'

const people = [
    {
        name: 'Yassine ANZAR BASHA',
        role: 'Fondateur & Développeur Full Stack',
        imageUrl: PPYassine,
        description: 'Passionné par le développement web et mobile.',
        linkedin: 'https://linkedin.com/in/yanzarbasha',
        stack: ['React', 'NodeJS', 'Express', 'MongoDB', 'SQL'],
    },
    {
        name: 'Abubakar ALIEV',
        role: 'Co-Foundateur & Développeur Back-End',
        imageUrl: PPAbubakar,
        description: 'Passionné par les données et Python.',
        linkedin: 'https://www.linkedin.com/in/alieva/',
        stack: ['Python', 'Django', 'FastAPI', 'SQL'],
    },
]

export default function About() {
    return (
        <main className="mb-16 grid h-full place-items-center gap-y-10 bg-[#E4E2DD] px-8 py-12 lg:px-8">
            <div className="grid gap-y-10">
                <div className="flex max-w-4xl flex-col">
                    <h1 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        À propos
                    </h1>
                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Notre histoire
                    </h2>
                    <p className="mt-6 text-justify text-base leading-7 text-gray-600">
                        <span className="font-bold">initum</span> est une agence
                        de prestations de services informatiques spécialisée
                        dans de le développement web. Fondée en 2024 à Paris par
                        deux développeurs passionnés, elle propose au grand
                        public des services de qualité à des prix compétitifs.
                    </p>
                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Notre équipe
                    </h2>
                    <div className="my-5 grid justify-center gap-y-5">
                        {people.map((person, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-4"
                            >
                                <img
                                    src={person.imageUrl}
                                    alt={person.name}
                                    className="w-32 rounded-3xl grayscale filter"
                                />
                                <div className="grid gap-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {person.name}
                                    </h3>
                                    <p className="text-gray-800">
                                        {person.role}
                                    </p>
                                    <p className="flex gap-x-1 text-gray-600">
                                        {person.stack.map((stack, index) => (
                                            <span
                                                key={index}
                                                class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-[#171716] ring-1 ring-inset ring-blue-700/10"
                                            >
                                                {stack}
                                            </span>
                                        ))}
                                    </p>
                                    <p>
                                        <Link
                                            target="_blank"
                                            to={person.linkedin}
                                            className="bi bi-linkedin text-2xl text-[#171716]"
                                        ></Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Nos coordonnées
                    </h2>
                    <p className="mt-6 text-justify text-base leading-7 text-gray-600">
                        <div>
                            <span className="font-bold">Téléphone:</span>{' '}
                            <Link
                                to="tel:=+33752701742"
                                className="hover:underline"
                            >
                                07 52 70 17 42
                            </Link>
                        </div>
                        <div>
                            <span className="font-bold">Email:</span>{' '}
                            <Link
                                to="mailto:contact@initum.fr"
                                className="hover:underline"
                            >
                                contact@initum.fr
                            </Link>
                        </div>
                    </p>
                </div>
            </div>
        </main>
    )
}
