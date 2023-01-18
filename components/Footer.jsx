import React from 'react'
import Link from 'next/link'
import MentionLegale from './MentionLegale'


const Footer = () => {
    return (
        <div><footer className="container mx-auto px-10 mb-8 pt-20">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex items-center mb-4 sm:mb-0">
                    <img src="/Logo.png" className="h-11 mr-3" alt="Verywell" />
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">Politique de confidentialité</Link>
                    </li>
                    <li>
                        <Link href="/MentionLegale" className="mr-4 hover:underline md:mr-6">Mention Légales</Link>
                    </li>
                    {/* <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li> */}
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-white sm:text-center text-white">© 2022 <Link href="/" className="hover:underline">Verywell Digital</Link>. All Rights Reserved.
            </span>

            
        </footer> </div>

        
    )
}

export default Footer