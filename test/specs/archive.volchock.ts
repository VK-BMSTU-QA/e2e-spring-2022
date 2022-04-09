import MainPage from '../pageobjects/main.page';
import NewAdvPage from '../pageobjects/newAdv.page';
import ProfilePage from '../pageobjects/profile.page';
import * as assert from 'assert';

describe('Добавление последнего(самого нового) объявления в архив', () => {
    const title = 'тест';
    beforeEach(async () => {
        MainPage.setWindowSize(1400, 1200);
        await MainPage.open();
        await MainPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.getUsername();
        await NewAdvPage.open();
        await NewAdvPage.publishAdvert(title);
    });

    it('Должен добавить последнее объявление в архив', async () => {
        await ProfilePage.open();
        await ProfilePage.archiveFirstAdvert();
        const archiveAdvertText = await ProfilePage.getFirstArchiveName();
        
        assert.strictEqual(
            title,
            archiveAdvertText,
            `Последнее объявление ${title} не соответствует тому, что в архиве ${archiveAdvertText}`
        );
    });
});