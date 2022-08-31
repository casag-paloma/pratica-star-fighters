import { Router } from "express";
import { battleTwoFighters, rankingFighters } from "../controllers/fightController.js";

const router = Router();

router.get('/battle', battleTwoFighters);
router.post('/ranking', rankingFighters);

export default router;