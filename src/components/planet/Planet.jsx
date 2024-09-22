import { useState } from "react"
import { planetsData } from "./planetData"

export const Planet = () => {
    const [planet, setPlanet] = useState(0)

    return (
        <section className="container flex flex-col text-white">
            <h2 className="xxs:mt-5 lg:mt-0 xxs:text-center md:text-start font-barlowCondensed md:text-xl lg:text-[28px]"><span className="mr-6 opacity-25">01</span>PICK YOUR DESTINATION</h2>
            <div className="flex lg:flex-row xxs:flex-col items-center h-full xxs:text-center lg:text-start">
                <div className="lg:flex-1">
                    <div className="xxs:size-[250px] xxs:mt-3 lg:mt-0 lg:size-auto">
                        <img src={planetsData[planet].img} alt={planetsData[planet].name} />
                    </div>
                </div>
                <div className="flex-1">
                    <ul className="flex gap-8 xxs:justify-center lg:justify-start xxs:mt-6 lg:mt-0">
                        {planetsData.map((planetData) => (
                            <li key={planetData.id} onClick={() => setPlanet(planetData.id - 1)} className={`${planetData.id - 1 === planet ? 'planetActive' : ''} relative pb-3 uppercase font-barlowCondensed cursor-pointer`}>{planetData.name}</li>
                        ))}
                    </ul>
                    <h1 className="md:mt-2 lg:mt-10 font-bellefair text-7xl uppercase">{planetsData[planet].name}</h1>
                    <p className="description max-w-[445px] xxs:pb-6 lg:pb-11 border-b-[1px] border-white/25">{planetsData[planet].desc}</p>
                    <div className="xxs:mt-6 lg:mt-10 flex xxs:justify-center lg:justify-start gap-28 font-barlowCondensed text-sm text-blue200">
                        <p>
                            AVG. DISTANCE
                            <span className="block pt-3 font-bellefair text-[28px]">{planetsData[planet].distance}</span>
                        </p>
                        <p>
                            Est. travel time
                            <span className="block pt-3 font-bellefair text-[28px]">{planetsData[planet].travelTime}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}