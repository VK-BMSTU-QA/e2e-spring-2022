import LoginPage from  '../pageobjects/login.page';
import TeamsPage from  '../pageobjects/teams.page';
import BoardPage from  '../pageobjects/board.page';
import * as assert from 'assert';

describe('Create board with correct name', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
        LoginPage.open();
        LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
    });

    afterEach(async () => {
        await TeamsPage.openBoard()
        await BoardPage.deleteBoard()
    });

    it('should create board with valid name', async () => {
        const expectedBoardName = 'someBoard'

        await TeamsPage.createBoard(expectedBoardName);
        const boardName = await TeamsPage.getBoardName();

        assert.strictEqual(
            boardName,
            expectedBoardName,
            `Название ${boardName} созданной доски не соответствует ожидаемому ${expectedBoardName}`,
        );
    });
});
