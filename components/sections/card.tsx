import { CodeXml, LucideProps } from 'lucide-react'
import React, { ForwardRefExoticComponent, RefAttributes } from 'react'

type Props = {
    title: string;
    desc: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

function Card({ title, desc, icon }: Props) {
    const Icon = icon;
    return (
        <li className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div
                    className='bg-foreground flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                >
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-900">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <span>{title}</span>
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{desc}</p>
                </div>
            </div>
        </li>
    )
}

export default Card