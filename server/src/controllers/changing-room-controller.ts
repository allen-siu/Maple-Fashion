import express from 'express';
import axios from 'axios';

export const getDefaultGameVersion = async (req: express.Request, res: express.Response) => {
    const response = await axios.get('https://api.maplestory.net/version/default');
    if(response.status != 200) {
        console.log("Request to Maplestory API failed.");
        return res.status(500);
    }

    console.log(response.data);
    return res.status(200);
}

export const getAllItems = async(req: express.Request, res: express.Response) => {
    /*const payload = {
        page:,
        maxEntries:,
        version:,
        subVersion:,
        locale:,
        sortBy:,
        name:,
        nameText:,
        overallCategory:,
        overallCategoryText:,
        category:,
        categoryText:,
        subcategory:,
        subcategoryText:,
        minLevel:,
        maxLevel:,
        cash:,
        gender:
    }*/
    const response = await axios.get('https://api.maplestory.net/items')
}