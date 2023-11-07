import express from "express";
const router = express.Router();

import bookApi from './v1/index.js';

router.use('/v1', bookApi);

export default router;