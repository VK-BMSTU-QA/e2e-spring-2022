import LoginPage from  '../pageobjects/login.page';
import BoardPage from  '../pageobjects/board.page';

describe('Logout', () => {
    beforeEach(async () => {
        await LoginPage.auth();
        LoginPage.setWindowSize(1400, 1200);
    });

    it('should logout', async () => {
        await BoardPage.open();

        await LoginPage.navbarLogout.click();

        await LoginPage.inputLogin.isDisplayed();
    });
});
