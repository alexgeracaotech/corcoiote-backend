import { Router } from 'express';
import * as InvoiceController from '../controllers/invoice.controller.ts';

const router = Router();

router.get('/', InvoiceController.getAllInvoices);

export default router;
