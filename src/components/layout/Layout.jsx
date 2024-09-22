import { useLocation } from "react-router-dom"
import { Header } from "./navigation/Header"
import { useEffect, useState } from "react";

export const Layout = ({ children }) => {
    const location = useLocation();
    const [backgroundImg, setBackgroundImg] = useState('');
    useEffect(() => {
        if (location.pathname === '/') {
            setBackgroundImg('xxs:bg-mob-home-bg lg:bg-home-bg')
        }
        else if (location.pathname === '/Destination'
        ) {
            setBackgroundImg('bg-destination-bg')
        }
        else if (location.pathname === '/Crew') {
            setBackgroundImg('bg-crew-bg')
        }
        else if (location.pathname === '/Technology') {
            setBackgroundImg('bg-technology-bg')
        }
    }, [location.pathname])
    return (
        <div className={`flex flex-col min-h-screen ${backgroundImg} bg-cover bg-center`}>
            <Header />
            <main className="flex-1 flex">
                {children}
            </main>
        </div>
    )
}