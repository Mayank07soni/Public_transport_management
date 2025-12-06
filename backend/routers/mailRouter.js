import { Router } from "express";
import sendgMail from "../controller/sendmail.js";
const router = Router();
router.get('/',sendgMail);

export default router;