import React from "react";

interface Props{
    name: string;
    href: string;
    download?:boolean;
}


export default function ButtonLink({name,href,download}:Props){
    if(download){
    return(
        <a 
        className="block p-3.5 border border-white max-w-52 text-center hover:text-slate-500 hover:border-slate-300 mt-3.5 cursor-pointer" download href={href} target="_blank" rel="noopener noreferrer ">
            {name}
        </a>
    )
    }
    return(
        <a 
        className="block p-3.5 border border-white max-w-52 text-center hover:text-slate-500 hover:border-slate-300 mt-3.5 cursor-pointer" href={href}>
            {name}
        </a>
    )
}