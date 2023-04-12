import prisma from "$lib/prisma";

export const load = async ({ params: { id } }) => {
	const post = await prisma.post.findUnique({
		where: { id: Number(id) },
		include: { author: true },
	});

	return { ...post };
}