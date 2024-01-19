import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function findProductBySlug(slug: string) {
    return prisma.profil.findFirstOrThrow({
        where: {
            slug: slug,
        },
    });
};
