import React from 'react';
import { works } from '../../constants';
import ButtonLink from '../ButtonLink';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className="bg-gray-800" id="projects">
      <h1 className="text-4xl md:text-5xl font-bold py-14 text-center">Projects</h1>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid gap-8 py-20 pb-40">
          {works.map((work) => {
            const { image, name, technology, code, siteLink } = work;
            return (
              <div
                key={name}
                className="flex flex-col md:flex-row bg-gray-800 overflow-hidden rounded-lg shadow-lg"
              >
                {/* Картинка */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                  <Image src={image} alt={name} fill className="object-cover" unoptimized />
                </div>

                {/* Описание и кнопки */}
                <div className="p-6 flex flex-col justify-between w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold mb-4">{name}</h3>

                  <ul className="list-disc ml-5 mb-4">
                    {technology?.map((item) => (
                      <li key={item} className="font-bold">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {code && <ButtonLink name="View on Github" href={code} />}
                    {siteLink && <ButtonLink name="View site" href={siteLink} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
