import { useSelector } from "react-redux";
import { CosmeticCategory, Inventory, Cosmetic } from "../store/storeTypes";
import { RootState } from "../store/store"
import { useDispatch } from "react-redux";
import { UpdatedClosetPayload, changeCategory, updateInventory } from "../store/reducers/closetSlice";
import { getEquipmentCategory, getFaces, getHairstyles } from "../store/storeController";

interface TabName {
    tabName: CosmeticCategory
}

export default function ClosetTab({tabName}: TabName) {

    const dispatch = useDispatch();
    const currentCategory: CosmeticCategory = useSelector((state: RootState) => state.closet.currentCategory)
    const inventory: Inventory = useSelector((state: RootState) => state.closet.equipInventory)

    const selectCategory = async() => {
        // If the tab being selected doesn't have its' items loaded, load them
        if (inventory[tabName as keyof Inventory].length == 0) {
            let loadedCategory: Cosmetic[];
            switch (tabName) {
                case CosmeticCategory.HAIR:
                    loadedCategory = await getHairstyles();
                    break;
                case CosmeticCategory.FACE:
                    loadedCategory = await getFaces();
                    break;
                default:
                    loadedCategory = await getEquipmentCategory(tabName);
                    break;
            }

            const inventoryUpdateInfo: UpdatedClosetPayload = {
                category: tabName,
                cosmetics: loadedCategory
            }
            dispatch(updateInventory(inventoryUpdateInfo))
        }

        dispatch(changeCategory(tabName))
        console.log(inventory)
    }

    if (tabName == currentCategory) {
        return (
            <li>
                <div className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                    <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    {tabName}
                </div>
            </li>
        )
    }
    else {
        return (
            <li>
                <div onClick={selectCategory} className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-100 hover:bg-gray-200 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                    </svg>
                    {tabName}
                </div>
            </li>
        )
    }

}