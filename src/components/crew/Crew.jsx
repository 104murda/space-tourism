import { staff } from './staffData.js'
import { useState } from "react"

export const Crew = () => {
  const [person, setPerson] = useState(0)

  return (
    <section className="container text-white">
      <h2 className="xxs:mt-5 lg:mt-0 xxs:text-center md:text-start font-barlowCondensed md:text-xl lg:text-[28px]"><span className="mr-6 opacity-25">02</span>MEET YOUR CREW</h2>  
      <div className='lg:flex'>
        <div className='flex-1 flex flex-col xxs:text-center lg:text-start'>
          <h2 className='xxs:mt-12 lg:mt-36 font-bellefair xxs:text-2xl lg:text-[32px] uppercase opacity-50'>{staff[person].post}</h2>
          <h1 className='xxs:my-4 lg:my-6 font-bellefair xxs:text-[40px] lg:text-[56px] uppercase leading-none'>{staff[person].name}</h1>
          <p className="description xxs:mx-auto lg:mx-0 xxs:max-w-[512px] lg:w-auto">{staff[person].desc}</p>
          <ul className='flex xxs:mt-6 lg:mt-auto xxs:gap-4 lg:gap-10 xxs:justify-center lg:justify-start lg:mb-10'>
            {staff.map((staffPersonal) => (
              <li key={staffPersonal.id} onClick={() => setPerson(staffPersonal.id - 1)} className={`${staffPersonal.id === person + 1 ? 'bg-white' : 'bg-white/15'} xxs:size-3 lg:size-4 rounded-full cursor-pointer`}></li>
            ))}
          </ul>
        </div>
        <div className='flex-1'>
          <div className='xxs:w-80 lg:w-[450px] lg:ml-auto xxs:mx-auto lg:mx-0'>
            <img src={staff[person].img} alt={staff[person].name} />
          </div>
        </div>
      </div>
    </section>
  )
}