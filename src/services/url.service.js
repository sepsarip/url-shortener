import { nanoid } from 'nanoid';
import UrlModel from '../models/url.model.js';

class UrlService {
  static async shortenUrl(originalUrl) {
    const shortCode = nanoid(8);
    const url = await UrlModel.createUrl(originalUrl, shortCode);
    return url;
  }

  static async getOriginalUrl(shortCode) {
    const url = await UrlModel.getUrlByShortCode(shortCode);
    return url ? url.original_url : null;
  }
}

export default UrlService;
