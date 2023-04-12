import prisma from "$lib/prisma";

export const load = async ({ params }) => {
	const post = await prisma.post.findUnique({
		where: { id: Number(params.id) },
		include: { author: true },
	});

	return { ...post };
}