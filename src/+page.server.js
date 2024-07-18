import { db } from '$lib/database/db';

export function load() {
	return {
		result: db.map((post) => ({
			name: db.name,
		}))
	};
}