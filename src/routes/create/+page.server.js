import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');
		if (!title || !content) {
			return fail(401, { error: 'Please fill in all fields.', title, content });
		}

		await prisma.post.create({
			data: {
				title,
				content,
				author: { connect: { email: 'bob@prisma.io' } }
			},
		});

		throw redirect(303, `/`)
	}
}