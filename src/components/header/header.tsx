import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ChartNoAxesCombinedIcon, CirclePlusIcon } from "lucide-react";

const Header = () => {
    return (
        <nav className="text-white border-b-2">
            <div className="flex flex-row justify-between  items-center py-4 px-16">
                <div>
                    <span className="text-2xl font-semibold">Programable Liquid</span>
                </div>
                <div className="flex flex-row gap-4">
                    <a href="/trading">
                        <button className="flex flex-row gap-2 bg-black py-2 px-4 rounded-lg">
                            <ChartNoAxesCombinedIcon/> 
                            <span className="font-bold">Trading</span>
                        </button>
                    </a>
                    <a href="/create">
                        <button className="flex flex-row gap-2 bg-black py-2 px-4 rounded-lg">
                            <CirclePlusIcon/> 
                            <span className="font-bold">Create</span>
                        </button>
                    </a>
                </div>
                <ConnectButton/>
            </div>
        </nav>
    )
}

export default Header