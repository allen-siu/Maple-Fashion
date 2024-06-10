import { useDispatch } from "react-redux";
import { Cosmetic, CosmeticCategory, Equip, Face, Hair } from "../store/storeTypes";
import { changeBottom, changeCape, changeEarrings, changeEyeAccessory, changeFace, changeFaceAccessory, changeGloves, changeHair, changeHat, changeOverall, changeRing, changeShoes, changeTop } from "../store/reducers/avatarSlice";


export default function CosmeticIcon(cosmetic: Cosmetic) {

    const dispatch = useDispatch();

    const equipCosmetic = () => {
        switch(cosmetic.cosmeticCategory) {
            case CosmeticCategory.HAIR:
                dispatch(changeHair(cosmetic as Hair))
                break
            case CosmeticCategory.FACE:
                dispatch(changeFace(cosmetic as Face))
                break
            case CosmeticCategory.HAT:
                dispatch(changeHat(cosmetic as Equip))
                break
            case CosmeticCategory.TOP:
                dispatch(changeTop(cosmetic as Equip))
                break
            case CosmeticCategory.BOTTOM:
                dispatch(changeBottom(cosmetic as Equip))
                break
            case CosmeticCategory.OVERALL:
                dispatch(changeOverall(cosmetic as Equip))
                break
            case CosmeticCategory.SHOES:
                dispatch(changeShoes(cosmetic as Equip))
                break
            case CosmeticCategory.CAPE:
                dispatch(changeCape(cosmetic as Equip))
                break
            case CosmeticCategory.GLOVES:
                dispatch(changeGloves(cosmetic as Equip))
                break
            case CosmeticCategory.FACE_ACCESSORY:
                dispatch(changeFaceAccessory(cosmetic as Equip))
                break
            case CosmeticCategory.EYE_ACCESSORY:
                dispatch(changeEyeAccessory(cosmetic as Equip))
                break
            case CosmeticCategory.EARRINGS:
                dispatch(changeEarrings(cosmetic as Equip))
                break
            case CosmeticCategory.RING:
                dispatch(changeRing(cosmetic as Equip))
                break
        }
    }

    return (
        <div onDoubleClick={equipCosmetic} className="w-28 h-24 flex items-center justify-center rounded-lg border-black hover:bg-gray-200 ">
            <img className="w-20 h-16" src={cosmetic.icon} />
        </div>
    );
}