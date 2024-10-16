import { Equip, CosmeticCategory, Inventory, Cosmetic } from "../store/store/storeTypes"
import ClosetTab from "./ClosetTab"
import { useSelector } from "react-redux"
import { RootState } from "../store/store/store"
import CosmeticIcon from "./EquipIcon"
import { useEffect } from "react"
import { getEquipmentCategory } from "../store/store/storeController"
import { useDispatch } from "react-redux"
import { UpdatedClosetPayload, updateInventory } from "../store/reducers/closetSlice"

export default function ClosetWindow() {

    const dispatch = useDispatch();

    const currentCategory: CosmeticCategory = useSelector((state: RootState) => state.closet.currentCategory)
    const inventory: Inventory = useSelector((state: RootState) => state.closet.equipInventory)

    // On initial startup, load items for the initial category
    useEffect(() => {
        async function loadInitialCategory() {
            const initialCosmetics: Equip[] = await getEquipmentCategory(currentCategory);
            const initialInventory: UpdatedClosetPayload = {
                category: currentCategory,
                cosmetics: initialCosmetics
            }
            dispatch(updateInventory(initialInventory))
        }
        loadInitialCategory();
    }, [])

    return (
        
        <div className="md:flex w-3/5">
            <ul className="flex-column w-60 space-y-0 text-sm font-medium bg-gray-100 text-gray-500 dark:text-gray-400 md:me-0 mb-4 md:mb-0">
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
                <ClosetTab tabName={CosmeticCategory.WEAPON} />
                <ClosetTab tabName={CosmeticCategory.HAIR} />
                <ClosetTab tabName={CosmeticCategory.FACE} />

            </ul>

            <div className="w-full p-6 pl-6 pt-6 overflow-y-scroll
                            grid md:grid-cols-7 gap-4">
                {inventory[currentCategory as keyof Inventory].map((cosmetic: Cosmetic) => {
                    return <CosmeticIcon  {...cosmetic} />;
                })}
            </div>
        </div>


    )
}