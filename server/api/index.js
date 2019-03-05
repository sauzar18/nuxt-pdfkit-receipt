import { Router } from 'express'
import pdfContent from './pdf'
const router = Router()

router.use(pdfContent)

export default router
