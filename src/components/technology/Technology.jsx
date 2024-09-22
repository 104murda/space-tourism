import { useState } from 'react'
import { techList } from './techData'

export const Technology = () => {
  const [tech, setTech] = useState(0)

  return (
    <section className="container text-white">
      <h2 className="xxs:mt-5 lg:mt-0 xxs:text-center md:text-start font-barlowCondensed md:text-xl lg:text-[28px]"><span className="mr-6 opacity-25">03</span>SPACE LAUNCH 101</h2>
      <div className="flex xxs:flex-col lg:flex-row gap-8 xxs:mt-12 lg:mt-16">
        <div className="flex-1 flex flex-col justify-center xxs:order-5 lg:order-1 xxs:text-center lg:text-start">
          <div className="lg:flex gap-16">
            <ul className='flex lg:flex-col justify-center xxs:gap-4 lg:gap-8 font-bellefair xxs:text-2xl lg:text-[32px]'>
              {techList.map((techItem) => (
                <li key={techItem.id} onClick={() => setTech(techItem.id - 1)} className={`flex justify-center items-center ${techItem.id === tech + 1 ? 'bg-white text-black' : 'border-[1px] border-white/25' } xxs:size-14 lg:size-20 rounded-full cursor-pointer`}><span>{techItem.id}</span></li>
              ))}
            </ul>
            <div className="flex-1">
              <h2 className='xxs:mt-7 lg:mt-0 font-bellefair xxs:text-2xl lg:text-[32px] uppercase opacity-50'>THE TERMINOLOGY…</h2>
              <h1 className='font-bellefair xxs:text-[40px] lg:text-[56px] uppercase'>{techList[tech].name}</h1>
              <p className='description xxs:max-w-[512px] lg:w-auto xxs:mx-auto lg:mx-0'>{techList[tech].desc}</p>
            </div>
          </div>
        </div>
        <div className='order-3'>
          <div className='xxs:w-80 lg:w-[500px] xxs:mx-auto lg:mx-0'>
            <img src={techList[tech].img} alt={techList[tech].name} />
          </div>
        </div>
      </div>
    </section>
  )
}