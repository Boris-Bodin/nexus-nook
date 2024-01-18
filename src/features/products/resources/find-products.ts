import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async function findProducts() {
    return prisma.product.findMany();
};
