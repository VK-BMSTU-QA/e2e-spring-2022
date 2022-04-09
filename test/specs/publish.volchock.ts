import MainPage from '../pageobjects/main.page';
import NewAdvPage from '../pageobjects/newAdv.page';
import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';

describe('Создание нового объявления', () => {
    beforeEach(async () => {
        MainPage.setWindowSize(1400, 1200);
        await MainPage.open();
        await MainPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.getUsername();
    });

    it('Создание нового объявления с названием тест', async () => {
        await NewAdvPage.open();
        const title = 'тест';
        await NewAdvPage.publishAdvert(title);
        await ProfilePage.open();
        const newAdvertText = await ProfilePage.getNewAdvertText();
        
        assert.strictEqual(
            title,
            newAdvertText,
            `Создание нового объявления с названием ${title} и остальными дефолтными параметрами`,
        );
    });
});