// import store from "./store";
import axios from "axios"
import { Equip, EquipCategory } from "./storeTypes";
import { ClosetState } from "./reducers/closetSlice";

export const getDefaultGameVersion = async() => {
    const response = await axios.get('https://api.maplestory.net/version/default');
    if(response.status != 200) {
        console.log("Request to Maplestory API failed.");
        return 
    }

    console.log(response.data);
    return
}


export const getEquipmentCategory = async(): Promise<ClosetState> =>  {
    const queryParams = {
        // page: 0,	
        // integer
        // Default: 0
        // The page of the search result to retrieve

        maxEntries: 1,
        // integer
        // Default: 100
        // The maximum number of entries to return per page of the search result


        // overallCategory: "",
        // string

        // category: "",
        // string

        subcategory: "Hat",
        cash: true,

        // gender: ""
        // Default: "male"
        // Enum: "male" "female" "any"
    }

    const response = await axios.get(`https://api.maplestory.net/items/`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to Maplestory API failed.");
        // return closetState
    }

    const equips = response.data.result
    const filteredEquips: Equip[] = equips.map((item: any) => {
        return {
            name: item.name,
            subcategory: item.subcategory,
            itemId: item.itemId,
            icon: `https://api.maplestory.net/item/${item.itemId}/icon`
        }
    })

    const newClosetState: ClosetState = {
        category: EquipCategory.HAT,
        equipsDisplayed: filteredEquips
    }

    return newClosetState
}