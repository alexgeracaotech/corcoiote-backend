import prisma from '../lib/prisma.ts';

export async function findAllInvoices() {
	return await prisma.invoice.findMany({
		include: { customer: true }
	});
}
