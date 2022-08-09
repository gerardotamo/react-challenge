import User from "../interface/user";
export async function login(email: string, users: User[]) {
    for (const user of users) {
        if (user.email === email) {
            localStorage.setItem('user', JSON.stringify(user))
            return user;
        }
    }
}
