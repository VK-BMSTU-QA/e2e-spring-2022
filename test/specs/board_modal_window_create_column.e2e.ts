import BoardPage from  '../pageobjects/board.page';
import * as assert from 'assert';
import LoginPage from '../pageobjects/login.page';

let data_id;

describe('Board. Create column.', () => {
    beforeEach(async () => {
        await LoginPage.auth();
        BoardPage.setWindowSize(1400, 1200);
    });

    it('should create column with specified name', async () => {
        const columnName = 'test_column';

        await BoardPage.open();

        await BoardPage.openCreateCardListModal();
        await BoardPage.fillmodalCreateCardList(columnName);

        const columnTitle = await BoardPage.getColumnTitle();

        data_id = await BoardPage.divColumn.getAttribute('data-id');

        assert.strictEqual(
          columnTitle,
          columnName,
          `Заголовок колонки ${columnName} не соответствует ожидаемому ${columnName}`,
        );
    });

    afterEach(async () => {
        // TODO - дергаем апишку
        await BoardPage.deleteCardListById(data_id);
    });
});


