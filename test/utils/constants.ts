import * as path from 'path';

export const urls = {
    base: 'https://brrrello.ru',
    login: 'login',
    profile: 'profile',
};

export const authData = {
    login: process.env.LOGIN,
    password: process.env.PASSWORD,
};

export const testChangeLogin = {
    new_login: process.env.NEWLOGIN,
};

export const testAvatarChange = {
    image: path.join('images', '2hoursLater.png'),
};

export const testChangeEmail = {
    email_ok: 'mail1234@abc.ru',
    email_error: 'mail1234abcru',
};
