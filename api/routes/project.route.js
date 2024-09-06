import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createproject, deleteproject, getproject, updateproject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/createproject', verifyToken, createproject)
router.get('/getproject', getproject)
router.delete('/deleteproject/:projectId/:userId', verifyToken, deleteproject)
router.put('/updateproject/:projectId/:userId', verifyToken, updateproject)


export default router;