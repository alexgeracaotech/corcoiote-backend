import type { Request, Response } from 'express';
import * as InvoiceService from '../services/invoice.service.ts';

export async function getAllInvoices(
	_request: Request,
	response: Response
): Promise<void> {
	const invoices = await InvoiceService.findAllInvoices();

	response.status(200).json(invoices);
}
