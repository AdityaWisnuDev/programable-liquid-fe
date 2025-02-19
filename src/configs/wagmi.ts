import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    base 
} from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
    appName: "Programable Liquid",
    projectId: "e610965ca2eedf1629cf9c5c04d39a1b",
    chains: [
        base 
    ],
});