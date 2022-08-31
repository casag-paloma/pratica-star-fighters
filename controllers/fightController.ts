import getFighter from "../repositories/figthersrepo.js";

import { Request, Response } from "express";

export async function battleTwoFighters(req: Request, res: Response){

   const result = await getFighter();
   console.log(`aqui, ${result}`)
   res.status(200).send('show');
};

export async function rankingFighters() {};