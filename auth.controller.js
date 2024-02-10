import { validationResult } from 'express-validator';

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ status: 'error', fields: errors.array() });
      }

      return res.json({ status: 'success', message: 'application sent' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new authController();
