import LoginPage from  '../pageobjects/login.page';
import TeamsPage from  '../pageobjects/teams.page';
import * as assert from 'assert';

describe('Error while creating board with empty name', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
        LoginPage.open();
        LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
    });

    it('should do not create board with empty name', async () => {
        await TeamsPage.createBoard('');
        const isOccurred = await TeamsPage.isBoardNameErrorOccurred();

        assert.strictEqual(
            isOccurred,
            true,
            `При создании доски с пустым названием не возникла соответствующая ошибка`,
        );
    });
});
