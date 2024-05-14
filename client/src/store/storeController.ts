import axios from "axios"
import { Equip, CosmeticCategory, Face, Hair } from "./storeTypes";
import { AvatarState } from "./reducers/avatarSlice";

export const getDefaultGameVersion = async() => {
    const response = await axios.get('https://api.maplestory.net/version/default');
    if(response.status != 200) {
        console.log("Request to Maplestory API failed.");
        return 
    }

    console.log(response.data);
    return
}


export const getEquipmentCategory = async(equipCategory: CosmeticCategory): Promise<Equip[]> =>  {
    let queryParams = {}
    if (equipCategory == CosmeticCategory.WEAPON) {
        queryParams = {
            category: equipCategory,
            // maxEntries: 10000,
            cash: true
        }
    }
    else {
        queryParams = {
            subcategory: equipCategory,
            // maxEntries: 10000,
            cash: true
        }
    }

    const response = await axios.get(`https://api.maplestory.net/items/`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to get equipment info failed.");
        return []
    }

    const equips = response.data.result
    const filteredEquips: Equip[] = equips.map((item: any) => {
        return {
            name: item.name,
            subcategory: item.subcategory,
            itemId: item.itemId,
            icon: `https://api.maplestory.net/item/${item.itemId}/icon`,
            gender: item.requiredStats.gender
        }
    })

    return filteredEquips
}


export const getHairstyles = async(): Promise<Hair[]> => {
    let queryParams = {
        // maxEntries: 11666,
        cash: true
    }

    const response = await axios.get(`https://api.maplestory.net/hairs`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to get hairstyle info failed.");
        return []
    }

    const hairs = response.data.result
    const filteredHairs: Hair[] = hairs.map((hair: any) => {
        return {
            name: hair.name,
            hairId: hair.hairId,
            icon: `https://api.maplestory.net/hair/${hair.hairId}/icon`,
            gender: hair.requiredStats.gender
        }
    })

    return filteredHairs
}


export const getFaces = async(): Promise<Face[]> => {
    let queryParams = {
        // maxEntries: 7952,
        cash: true
    }

    const response = await axios.get(`https://api.maplestory.net/faces`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to get face info failed.");
        return []
    }

    const faces = response.data.result
    const filteredFaces: Face[] = faces.map((face: any) => {
        return {
            name: face.name,
            faceId: face.faceId,
            icon: `https://api.maplestory.net/face/${face.faceId}/icon`,
            gender: face.requiredStats.gender
        }
    })

    return filteredFaces;
}


export const renderAvatar = async(avatar: AvatarState): Promise<any> => {
    // Convert the equip objects to the equip itemIds
    const reqBody = avatar
    reqBody.itemIds.map((equip) => equip.itemId)

    const response = await axios.post(`https://api.maplestory.net/character/render`);
    if(response.status != 200) {
        console.log("Request to render avatar failed.");
    }

    const rawImage = response.data;

    console.log(rawImage);

}