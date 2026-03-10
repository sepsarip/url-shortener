import UrlService from '../services/url.service.js';

class UrlController {
  static async shortenUrl(req, res) {
    const { originalUrl } = req.body;
    try {
      const url = await UrlService.shortenUrl(originalUrl);
      res.status(201).json({
        status: 'success',
        data: {
          originalUrl: url.original_url,
          shortCode: url.short_code,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to shorten URL',
      });
    }
  }

  static async redirectToOriginalUrl(req, res) {
    const { shortCode } = req.params;
    try {
      const originalUrl = await UrlService.getOriginalUrl(shortCode);
      if (!originalUrl) {
        return res.status(404).json({
          status: 'error',
          message: 'URL not found',
        });
      }
      res.redirect(originalUrl);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to retrieve original URL',
      });
    }
  }
}

export default UrlController;
