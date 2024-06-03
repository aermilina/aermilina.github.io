import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faTelegram,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="flex justify-between items-center p-3.5 border-t border-slate-500">
            <p> 2024 developed by Anna Ermilina</p>
            <div className="flex space-x-8">

                <Link href="https://www.linkedin.com/in/aermilina">
                    <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
                </Link>
                <Link href="https://t.me/aermilina">
                    <FontAwesomeIcon icon={faTelegram} size="xl"/>
                </Link>
                <Link href="mailto:anna.ermilina@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </Link>
            </div>
        </footer>
    )
}