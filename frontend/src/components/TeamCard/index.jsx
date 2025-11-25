import { Link } from 'react-router-dom'

export default function TeamCard({ person }) {
    return (
        <div className="grid grid-cols-3 gap-x-4">
            <img
                src={person.imageUrl}
                alt={person.name}
                className="col-span-1 h-32 w-32 rounded-3xl grayscale filter"
            />
            <div className="col-span-2 grid items-center">
                <h3 className="text-xl font-bold text-gray-900">
                    {person.name}
                </h3>
                <p className="text-md my-0 text-gray-600">{person.role}</p>
                <p>
                    <Link
                        target="_blank"
                        to={person.linkedin}
                        className="bi bi-linkedin text-2xl text-[#171716]"
                    ></Link>
                </p>
            </div>
        </div>
    )
}
