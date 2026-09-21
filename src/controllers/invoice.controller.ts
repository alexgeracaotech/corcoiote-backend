import type { Request, Response } from 'express';
import type { InvoiceStatus } from '../../prisma/generated/client.ts';
import type {
	CreateInvoice,
	UpdateInvoice
} from '../schemas/invoice.schema.ts';
import * as InvoiceService from '../services/invoice.service.ts';

export async function getAllInvoices(
	request: Request,
	response: Response
): Promise<void> {
	const page = Number(request.query.page) || 1;

	const invoices = await InvoiceService.findAllInvoices(page);

	response.status(200).json(invoices);
}

export async function getInvoiceById(
	request: Request,
	response: Response
): Promise<void> {
	const id = Number(request.params.id);

	const invoice = await InvoiceService.findInvoiceById(id);

	response.status(200).json(invoice);
}

export async function createInvoice(
	request: Request,
	response: Response
): Promise<void> {
	const { customerId, amount, status, date } =
		request.body as CreateInvoice & { customerId: number };

	const invoice = await InvoiceService.insertInvoice(customerId, {
		amount,
		status,
		date
	});

	response.status(201).json(invoice);
}

export async function updateInvoice(
	request: Request,
	response: Response
): Promise<void> {
	const id = Number(request.params.id);
	const { amount, status, date } = request.body as UpdateInvoice;

	const invoice = await InvoiceService.modifyInvoice(id, {
		amount,
		status,
		date
	});

	response.status(200).json(invoice);
}

export async function deleteInvoice(
	request: Request,
	response: Response
): Promise<void> {
	const id = Number(request.params.id);

	await InvoiceService.removeInvoice(id);

	response.status(204).send();
}
