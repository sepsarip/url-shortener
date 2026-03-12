import UrlController from '../controllers/url.controller.js';
import express from 'express';
import { validateUrl } from '../validators/url.validator.js';

const router = express.Router();

router.post('/shorten', validateUrl, UrlController.shortenUrl);
router.get('/:shortCode', UrlController.redirectToOriginalUrl);

export default router;
