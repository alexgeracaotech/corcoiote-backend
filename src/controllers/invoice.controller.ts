import type { Request, Response } from 'express';
import * as InvoiceService from '../services/invoice.service.ts';

export async function getAllInvoices(
	request: Request,
	response: Response
): Promise<void> {
	const page = Number(request.query.page) || 1;

	const invoices = await InvoiceService.findAllInvoices(page);

	response.status(200).json(invoices);
}
