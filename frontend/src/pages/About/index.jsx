import PPYassine from '../../assets/pp_yassine.png'
import PPAbubakar from '../../assets/pp_abubakar.png'
import { Link } from 'react-router-dom'
import TeamCard from '../../components/TeamCard'

const people = [
    {
        name: 'Yassine ANZAR BASHA',
        role: 'Développeur Full-Stack',
        imageUrl: PPYassine,
        description:
            "Passionné par l'entrepreneuriat et les nouvelles technologies. J'aime créer des solutions innovantes afin d'optimiser les processus des entreprises et améliorer l'expérience utilisateur.",
        linkedin: 'https://linkedin.com/in/yanzarbasha',
        stack: ['React', 'NodeJS', 'Express', 'MongoDB', 'SQL'],
    },
    {
        name: 'Abubakar ALIEV',
        role: 'Développeur Back-End',
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
                    <div className="my-5 grid justify-center gap-x-5 gap-y-5 lg:grid-cols-2">
                        {people.map((person) => (
                            <TeamCard key={person.linkedin} person={person} />
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
