import MainPage from '../pageobjects/main.page';
import NewAdvPage from '../pageobjects/newAdv.page';
import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';

describe('Login with correct username and password', () => {
    beforeEach(async () => {
        MainPage.setWindowSize(1400, 1200);
        await MainPage.open();
        await MainPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.getUsername();
    });

    it('should search for text in search input after click on search btn', async () => {
        await NewAdvPage.open();
        const title = 'тест';
        await NewAdvPage.publishAdvert(title);
        await ProfilePage.open();
        await ProfilePage.archiveFirstAdvert();
        const archiveAdvertText = await ProfilePage.getFirstArchiveName();
        
        assert.strictEqual(
            title,
            archiveAdvertText,
            `Создание нового объявления с названием ${title} и остальными дефолтными параметрами`,
        );
    });
});