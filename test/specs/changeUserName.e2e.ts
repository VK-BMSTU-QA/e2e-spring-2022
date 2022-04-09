import LoginPage from  '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';
import ProfilePage from '../pageobjects/profile.page'
import * as assert from 'assert';

describe('Change userName', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should successfully change userName', async () => {
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.open();

        const username = "Artyom";
        await MainPage.toProfile();
        const nameAndSurname = await ProfilePage.changeUserName(username);
        const nameAndSurnameArray = nameAndSurname.split(" ");
        const name = nameAndSurnameArray[0];

        assert.strictEqual(
            name,
            username,
            `Новое имя пользователя ${nameAndSurname} не соответствует ожидаемому ${username}`,
          );
    });
});
