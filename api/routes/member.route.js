import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createmember, deletemember, getmembers, updatemember } from '../controllers/member.controller.js';

const router = express.Router();

router.post('/createmember', verifyToken, createmember)
router.get('/getmembers', getmembers)
router.delete('/deletemember/:memberId/:userId', verifyToken, deletemember)
router.put('/updatemember/:memberId/:userId', verifyToken, updatemember)


export default router;