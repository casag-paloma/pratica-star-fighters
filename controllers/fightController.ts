import getFighter from "../repositories/figthersrepo.js";


export async function battleTwoFighters(){

    try {
        const result = await getFighter();
        console.log(result);

    } catch (error) {
        
    }
};

export async function rankingFighters() {};