import { body, validationResult } from 'express-validator';

export const validateUrl = [
  body('originalUrl').notEmpty().withMessage('URL is required'),
  body('originalUrl')
    .isURL({ require_protocol: true })
    .withMessage(
      'Please provide a valid URL with protocol (http:// or https://)',
    ),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid URL',
        errors: errors.array(),
      });
    }
    next();
  },
];
