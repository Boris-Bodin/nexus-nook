import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function findProductById(id: number) {
    return prisma.product.findUnique({
        where: {
            id: id,
        },
    });
};
