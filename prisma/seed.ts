import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function Seed() {
    await prisma.user.createMany({
        data: [
            {name: "Alice", email: "alice@example.com"},
            {name: "Bob", email: "bob@example.com"},
        ],
    })
}

Seed().then(() => prisma.$disconnect());