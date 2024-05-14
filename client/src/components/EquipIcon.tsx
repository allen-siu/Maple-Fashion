import { Cosmetic } from "../store/storeTypes";


export default function CosmeticIcon(cosmetic: Cosmetic) {

    return (
        <div>
            <img src={cosmetic.icon} alt="Image" />
            <p>{cosmetic.name}</p>
        </div>
    );
}