import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ params: { id } }) => {
	const post = await prisma.post.findUnique({
		where: { id: Number(id) },
		include: { author: true },
	});

	return { ...post };
}

export const actions = {
	default: async ({ request, params: { id } }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');
		if (!title || !content) {
			return fail(401, { error: 'Please fill in all fields.', title, content });
		}

		await prisma.post.update({
			where: {
				id: Number(id)
			},
			data: {
				title,
				content
			},
		});

		throw redirect(303, `/`)
	}
}