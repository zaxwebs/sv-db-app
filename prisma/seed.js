import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
	const alice = await prisma.user.upsert({
		where: { email: 'alice@prisma.io' },
		update: {},
		create: {
			email: 'alice@prisma.io',
			name: 'Alice',
			posts: {
				create: [
					{
						title: 'To That End',
						content: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.',
						published: true,
					},
					{
						title: 'Leave A Trail',
						content: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
						published: true,
					},
				]

			},
		},
	})
	const bob = await prisma.user.upsert({
		where: { email: 'bob@prisma.io' },
		update: {},
		create: {
			email: 'bob@prisma.io',
			name: 'Bob',
			posts: {
				create: [
					{
						title: 'Goals Ridiculously High',
						content: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
						published: true,
					},
				],
			},
		},
	})
	console.log({ alice, bob })
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})