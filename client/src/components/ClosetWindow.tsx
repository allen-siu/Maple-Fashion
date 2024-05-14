import { Equip, CosmeticCategory, Inventory } from "../store/storeTypes"
import ClosetTab from "./ClosetTab"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import CosmeticIcon from "./EquipIcon"

export default function ClosetWindow() {

    const currentCategory: CosmeticCategory = useSelector((state: RootState) => state.closet.currentCategory)
    const inventory: Inventory = useSelector((state: RootState) => state.closet.equipInventory)

    return (
        
        <div className="md:flex">
            <ul className="flex-column w-56 space-y space-y-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-0 mb-4 md:mb-0">
                <ClosetTab tabName={CosmeticCategory.HAIR} />
                <ClosetTab tabName={CosmeticCategory.FACE} />
                <ClosetTab tabName={CosmeticCategory.HAT} />
                <ClosetTab tabName={CosmeticCategory.TOP} />
                <ClosetTab tabName={CosmeticCategory.BOTTOM} />
                <ClosetTab tabName={CosmeticCategory.OVERALL} />
                <ClosetTab tabName={CosmeticCategory.SHOES} />
                <ClosetTab tabName={CosmeticCategory.CAPE} />
                <ClosetTab tabName={CosmeticCategory.GLOVES} />
                <ClosetTab tabName={CosmeticCategory.FACE_ACCESSORY} />
                <ClosetTab tabName={CosmeticCategory.EYE_ACCESSORY} />
                <ClosetTab tabName={CosmeticCategory.EARRINGS} />
                <ClosetTab tabName={CosmeticCategory.RING} />

            </ul>
            <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                {inventory[currentCategory].map((equip) => {
                    return <CosmeticIcon  {...equip} />;
                })}
            </div>
        </div>


    )
}