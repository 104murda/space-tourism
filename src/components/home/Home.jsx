import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <section className="container xxs:text-center lg:flex justify-between items-center md:content-center flex-wrap lg:pb-32 xxs:mt-6">
            <div className="basis-1/2">
                <h2 className="font-barlowCondensed xxs:text-base md:text-[28px]  text-blue-200">SO, YOU WANT TO TRAVEL TO</h2>
                <h1 className="font-bellefair xxs:text-[80px] md:text-[144px] text-white">SPACE</h1>
                <p className="description xxs:mx-auto xxs:max-w-[512px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="flex-initial flex justify-center items-center xxs:size-36 md:size-[272px] xxs:mx-auto xxs:mt-28 md:mt-16 rounded-full font-bellefair font-normal xxs:text-lg md:text-[32px] bg-white lg++:hover:size-72 hover:bg-white/40 duration-500">
                <Link to='/Destination' className="size-full rounded-full flex items-center justify-center">
                    <span className="rounded-full  text-black">EXPLORE</span>
                </Link>
            </div>
        </section>
    )
}