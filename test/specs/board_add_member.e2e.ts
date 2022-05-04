import BoardPage from  '../pageobjects/board.page';
import * as assert from 'assert';
import LoginPage from '../pageobjects/login.page';

describe('Board. Members', () => {
    beforeEach(async () => {
        await LoginPage.auth();
        BoardPage.setWindowSize(1400, 1200);
    });

    it('should add member', async () => {
        const newMemberLogin = 'DPesht';

        await BoardPage.open();

        await BoardPage.MemberModal.openInviteMemberModal();
        const foundUsername = await BoardPage.MemberModal.searchInviteMemberModal(newMemberLogin);

        assert.strictEqual(
          newMemberLogin,
          foundUsername,
          `Аккаунт с username ${foundUsername} не найден (ожидалось: ${newMemberLogin})`,
        );

        await BoardPage.MemberModal.modalAddMemberFirstSearchResultUsername.click();

        await BoardPage.testUsername(newMemberLogin).isDisplayed();
    });

    afterEach(async () => {
        // TODO - дергать апишку
        await BoardPage.MemberModal.openInviteMemberModal();
        await BoardPage.MemberModal.modalAddMemberFirstSearchResultUsername.click();
    });
});


