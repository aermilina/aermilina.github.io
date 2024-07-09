import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar(){
    return(
        <header className="flex flex-wrap justify-between items-center p-3.5 border-b border-slate-500">
            <div className="flex-wrap text-slate-50 text-base">
                <p className="text-lg font-bold">Anna Ermilina</p>
                <p className="text-slate-300">Frontend developer</p>
            </div>
            <div className="flex space-x-4">
                <Link href="/#about">About</Link>
                <Link href="/#projects">Projects</Link>
            </div>
            <div className="flex space-x-8 mt-3 md:mt-0">
                <Link href="https://www.linkedin.com/in/aermilina">
                    <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                </Link>
                <Link href="https://t.me/aermilina">
                    <FontAwesomeIcon icon={faTelegram} size="xl"/>
                </Link>
                <Link href="mailto:anna.ermilina@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </Link>
            </div>
        </header>
    )
}