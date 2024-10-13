import axios from "axios"
import { Equip, CosmeticCategory, Face, Hair } from "./storeTypes";
import { AvatarState } from "./reducers/avatarSlice";

const PROTOCOL = 'http'
const HOST = 'localhost'
const PORT = 8080


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
            cash: true,
            // gender: 'female'
        }
    }
    else {
        queryParams = {
            subcategory: equipCategory,
            // maxEntries: 10000,
            cash: true,
            // gender: 'female'
        }
    }

    const response = await axios.get(`https://api.maplestory.net/items/`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to get equipment info failed.");
        return []
    }
    console.log("Successfully made API call to getEquipmentCategory");

    const equips = response.data.result
    const filteredEquips: Equip[] = equips.map((item: any) => {
        return {
            name: item.name,
            subcategory: item.subcategory,
            itemId: item.itemId,
            icon: `https://api.maplestory.net/item/${item.itemId}/icon`,
            gender: item.requiredStats.gender,
            cosmeticCategory: equipCategory
        }
    })

    return filteredEquips
}


export const getHairstyles = async(): Promise<Hair[]> => {
    let queryParams = {
        // maxEntries: 11666,
        // maxEntries: 400,
        cash: true,
        gender: 'any'
    }

    const response = await axios.get(`https://api.maplestory.net/hairs`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to get hairstyle info failed.");
        return []
    }
    console.log("Successfully made API call to getHairstyles");

    const hairs = response.data.result
    const filteredHairs: Hair[] = hairs.map((hair: any) => {
        return {
            name: hair.name,
            hairId: hair.hairId,
            icon: `https://api.maplestory.net/hair/${hair.hairId}/icon`,
            gender: hair.requiredStats.gender,
            cosmeticCategory: CosmeticCategory.HAIR
        }
    })

    return filteredHairs
}


export const getFaces = async(): Promise<Face[]> => {
    let queryParams = {
        // maxEntries: 7952,
        cash: true,
        gender: 'any'
    }

    const response = await axios.get(`https://api.maplestory.net/faces`, { params: queryParams });
    if(response.status != 200) {
        console.log("Request to get face info failed.");
        return []
    }
    console.log("Successfully made API call to getFaces");

    const faces = response.data.result
    const filteredFaces: Face[] = faces.map((face: any) => {
        return {
            name: face.name,
            faceId: face.faceId,
            icon: `https://api.maplestory.net/face/${face.faceId}/icon`,
            gender: face.requiredStats.gender,
            cosmeticCategory: CosmeticCategory.FACE
        }
    })

    return filteredFaces;
}


export const renderAvatar = async(avatar: AvatarState): Promise<any> => {
    // Take avatar state and create json request body format
    // const avatarInitialState: AvatarState = {
//     "skin": Skin.LIGHT,
//     "faceId": 20000,
//     "hairId": 30000,
//     "pose": "standingOneHanded",    //
//     "poseFrame": 1,                 //
//     "faceEmote": "default",         //  These values typically won't be changed
//     "faceFrame": 0,                 //
//     "ears": "humanEars",            //
//     "itemIds": [],
//     "effectFrame": 0                //  
// }
    const skin = avatar[CosmeticCategory.SKIN]

    const face = avatar[CosmeticCategory.FACE]
    let faceId = 20000
    if (face) { faceId = face.faceId }

    const hair = avatar[CosmeticCategory.HAIR]
    let hairId = 30000
    if (hair) { hairId = hair.hairId }

    const items = []
    for (const cosmeticCategory in avatar) {
        if (cosmeticCategory == CosmeticCategory.SKIN 
            || cosmeticCategory == CosmeticCategory.HAIR
            || cosmeticCategory == CosmeticCategory.FACE) {
            continue;
        }

        if (avatar.hasOwnProperty(cosmeticCategory)) {
            const cosmetic = avatar[cosmeticCategory as keyof AvatarState];
            if (cosmetic) {
                items.push((cosmetic as Equip).itemId)
            }
        }
    }

    const reqBody = {
        "skin": skin,
        "faceId": faceId,
        "hairId": hairId,
        "pose": "standingOneHanded",    //
        "poseFrame": 1,                 //
        "faceEmote": "default",         //  These values typically won't be changed
        "faceFrame": 0,                 //
        "ears": "humanEars",            //
        "effectFrame": 0,               //  
        "itemIds": items
    }

    try {
        const response = await axios.post(`https://api.maplestory.net/character/render`, reqBody, {
            responseType: 'arraybuffer'
        });
        if(response.status != 200) {
            console.log("Request to render avatar failed.");
            return null
        }
        console.log("Successfully made API call to renderAvatar")

        // Define function to convert binary data to base64 from array buffer
        const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
            let binary = '';
            const bytes = new Uint8Array(buffer);
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        };

        const rawImage = response.data;

        // Convert binary data to a base64 string
        const base64Image = arrayBufferToBase64(rawImage);
        const trueImage = `data:image/png;base64,${base64Image}`;
        console.log(trueImage)
        
        return trueImage

    } catch (error) {
        console.error("An error occurred while rendering the avatar:", error);
        return null;
    }
}


export const saveAvatar = async(name: string, avatar: AvatarState) => {
    const reqBody = {
        name: name,
        [CosmeticCategory.SKIN]: avatar.Skin,
        [CosmeticCategory.HAIR]: avatar.Hair,
        [CosmeticCategory.FACE]: avatar.Face,
        [CosmeticCategory.WEAPON]: avatar.Weapon,
        [CosmeticCategory.HAT]: avatar.Hat,
        [CosmeticCategory.TOP]: avatar.Top,
        [CosmeticCategory.BOTTOM]: avatar.Bottom,
        [CosmeticCategory.OVERALL]: avatar.Overall,
        [CosmeticCategory.SHOES]: avatar.Shoes,
        [CosmeticCategory.CAPE]: avatar.Cape,
        [CosmeticCategory.GLOVES]: avatar.Glove,
        [CosmeticCategory.FACE_ACCESSORY]: avatar["Face Accessory"],
        [CosmeticCategory.EYE_ACCESSORY]: avatar["Eye Decoration"],
        [CosmeticCategory.EARRINGS]: avatar.Earrings,
        [CosmeticCategory.RING]: avatar.Ring
    }

    try {
        const response = await axios.post(`${PROTOCOL}://${HOST}:${PORT}/api/uploadAvatar`, reqBody)
        if (response.status != 200) {
            console.log('Failed to save avatar.')
            return response.statusText
        }
        console.log('Successfully saved avatar.')
        return response.statusText
    }
    catch(e) {
        console.log(e)
        return 'An error occurred while trying to save.'
    }
}