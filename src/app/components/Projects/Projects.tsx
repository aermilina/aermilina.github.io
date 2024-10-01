import React from "react";
import {works} from "../../constants"
import ButtonLink from "../ButtonLink";


export default function Projects(){
    

    return (
        <section className="bg-gray-800" id="projects">
            <h1 className=" text-4xl md:text-5xl font-bold py-14 text-center ">
                Projects
            </h1>
            <div className="bg-gray-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8 py-20 pb-40">
                    {works.map((work)=>{
                        const {image,name,description,technology,code,siteLink} = work
                        return(
                        <div className="relative md:flex md: mx-auto overflow-hidden">
                                <img
                                    src={image}
                                    alt="portfolio"
                                    className=" object-cover opacity-50 md:h-60 md:mr-14 md:opacity-90"
                                />
                                <h3 className="absolute top-4 text-gray-50 font-bold text-xl bg-red-500 px-2">
                                    {name}
                                </h3>
                                <div className="absolute bottom-10 left-10 md:static md:self-end">
                                    <ul className="list-disc">
                                    {technology && technology.map((item)=>{
                                        return(
                                            <li className="text-white text-m font-bold">{item}</li>
                                        )
                                    })}
                                </ul>
                                {code && <ButtonLink name="View on Github" href={code}/>}
                                {siteLink && <ButtonLink name="View site" href={siteLink}/> }

                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </section>
    )
}