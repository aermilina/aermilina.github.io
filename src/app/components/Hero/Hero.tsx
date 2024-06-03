import React from "react"
import ButtonLink from "../ButtonLink"

export default function Hero(){
    return(
        <section className="flex flex-col-reverse  justify-center p-3 md:flex-row md:p-14" id="about">
           <div className="md:self-end  md:ml-14"> 
                <p className="text-sm text-slate-300">
                    Hi, my name is Anna Ermilina.
                </p>
                <h1 className="text-xl text-balance">I am a frontend developer, 
                specialized in development of web applications using React, Next.js</h1>
                <ButtonLink name="My CV" href="/resume_eng.pdf" download/>
            </div>
            <img className="mx-auto my-4 rounded-full w-40 h-40 " src="/avatar.jpg" alt="Anna Ermilina"/>
        </section>
    )
}