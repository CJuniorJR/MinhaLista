export const TOKEN_KEY = "";

export const LOGGED_USER = {};

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => JSON.parse(localStorage.getItem(LOGGED_USER));

export const login = user => {
    localStorage.setItem(TOKEN_KEY, user.data.data.token);
    localStorage.setItem(LOGGED_USER, JSON.stringify(user.data.data.user));
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(LOGGED_USER);
}