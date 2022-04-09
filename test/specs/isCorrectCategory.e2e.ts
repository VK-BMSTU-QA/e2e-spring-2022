import LoginPage from  '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';
import EventPage from '../pageobjects/event.page';
import * as assert from 'assert';

describe('Check Category', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should be event with selected category', async () => {
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.open();

        const selectedCategory = "Тусовки";
        await MainPage.filterCategoryTusovki();
        const category = await EventPage.getCategory();

        assert.strictEqual(
          selectedCategory,
          category,
          `Мероприятие не содержит выбранную категорию ${selectedCategory}, полученная -  ${category}`,
        );
    });
});


