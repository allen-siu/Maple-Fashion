import express from 'express';
import { getDefaultGameVersion } from '../controllers/changing-room-controller';

const router = express.Router()

router.get("/", (req, res) => {
    getDefaultGameVersion(req, res);
});


// module.exports = router
export default router;