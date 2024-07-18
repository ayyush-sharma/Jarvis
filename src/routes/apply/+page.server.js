import * as database from '$lib/database/db';

export function load({ cookies }) {
    let id = cookies.get('userid');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/' });
    }

    return {
        result: database.getData(id)
    };
}

export const actions = {

    default: async ({ cookies, request }) => {
        // Parse form data from the request
        const data = await request.formData();
        
        // Add new data entry to the database
        database.createData(
            cookies.get('userid'),
            data.get('name'),
            data.get('email'),
            data.get('skills')
        );
    }
};
