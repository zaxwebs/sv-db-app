import prisma from '$lib/prisma';

export const load = async () => {
	const response = await prisma.post.findMany({
		orderBy: [
			{
				id: 'desc',
			}
		],
		include: { author: true },
	})

	return { feed: response };
};