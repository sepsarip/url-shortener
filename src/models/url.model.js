import pool from '../config/db.js';

class UrlModel {
  static async createUrl(originalUrl, shortCode) {
    const query =
      'INSERT INTO urls (original_url, short_code) VALUES ($1, $2) RETURNING *';
    const values = [originalUrl, shortCode];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async getUrlByShortCode(shortCode) {
    const query = 'SELECT original_url FROM urls WHERE short_code = $1';
    const values = [shortCode];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default UrlModel;
