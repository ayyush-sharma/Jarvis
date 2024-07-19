
export const db = new Map();

export function getData(userid) {
    if (!db.get(userid)) {
        db.set(userid, [{
            id: crypto.randomUUID(),
            name: "Ayush",
            email: "ayush@ecozen.com",
            skills: "Angular"
        }]);
    }
    return db.get(userid);
}


export function createData(userid, name, email, skills) {

    const userData = db.get(userid);
    userData.push({
        id: crypto.randomUUID(),
        name,
        email,
        skills
    });
}