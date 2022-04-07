import BoardPage from  '../pageobjects/board.page';
import * as assert from 'assert';
import LoginPage from '../pageobjects/login.page';

let oldBoardName;

describe('Board. Rename board', () => {
    beforeEach(async () => {
        await LoginPage.auth();
        BoardPage.setWindowSize(1400, 1200);
    });

    it('should rename board', async () => {
        const newBoardName = 'board_name';

        await BoardPage.open();

        oldBoardName = await BoardPage.lblBoardName.getText();

        await BoardPage.openBoardSettingsModal();
        await BoardPage.fillModalSettings(newBoardName);

        const testBoardName = await BoardPage.lblBoardName.getText();

        assert.strictEqual(
          newBoardName,
          testBoardName,
          `Название доски ${testBoardName} не соответствует ожидаемому ${newBoardName}`,
        );
    });

    afterEach(async () => {
        // TODO - дергать апишку
        await BoardPage.openBoardSettingsModal();
        await BoardPage.fillModalSettings(oldBoardName);
    });
});


