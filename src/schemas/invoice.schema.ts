import { z } from 'zod';

export const createInvoiceSchema = z.object({
	amount: z
		.number('Entrada inválida: esperava-se um número.')
		.positive('O valor deve ser maior que zero.'),
	status: z.enum(['PENDING', 'PAID']),
	date: z.coerce.date('Data inválida.')
});

export const updateInvoiceSchema = z.object({
	amount: z
		.number('Entrada inválida: esperava-se um número.')
		.positive('O valor deve ser maior que zero.')
		.optional(),
	status: z.enum(['PENDING', 'PAID']).optional(),
	date: z.coerce.date('Data inválida.').optional()
});

export type CreateInvoice = z.infer<typeof createInvoiceSchema>;
export type UpdateInvoice = z.infer<typeof updateInvoiceSchema>;
