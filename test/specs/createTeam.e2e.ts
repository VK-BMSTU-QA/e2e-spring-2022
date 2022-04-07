import LoginPage from  '../pageobjects/login.page';
import TeamsPage from  '../pageobjects/teams.page';
import * as assert from 'assert';
import BoardPage from "../pageobjects/board.page";

describe('Create team with correct name', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
        LoginPage.open();
        LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
    });

    afterEach(() => {
        TeamsPage.deleteTeam()
    });

    it('should create team with valid name', async () => {
        const expectedTeamName = 'someTeam'

        await TeamsPage.createTeam(expectedTeamName);
        const isCreated = await TeamsPage.isTeamCreated();

        assert.strictEqual(
            isCreated,
            true,
            `Cозданная команда не отобразилась`,
        );
    });
});
