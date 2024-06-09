import { Cosmetic } from "../store/storeTypes";


export default function CosmeticIcon(cosmetic: Cosmetic) {

    return (
        <div className="w-28 h-24 flex items-center justify-center rounded-lg border-black hover:bg-gray-200 ">
            <img className="w-20 h-16" src={cosmetic.icon} />
        </div>
    );
}