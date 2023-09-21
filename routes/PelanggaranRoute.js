import express from 'express';
import {getPelanggarans,getPelanggaransById,savePelanggaran,updatePelanggaran,deletePelanggaran} from "../controller/PelanggaranController.js"

const router =express.Router();

router.get('/pelanggarans',getPelanggarans);
router.get('/pelanggarans/:id',getPelanggaransById);
router.post('/pelanggarans',savePelanggaran);
router.patch('/pelanggarans/:id',updatePelanggaran);
router.delete('/pelanggarans/:id',deletePelanggaran);

export default router;