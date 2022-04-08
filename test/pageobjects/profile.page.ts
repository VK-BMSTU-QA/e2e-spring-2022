import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    private get btnSubmit () {
        return $('button.btn.btn_primary');
    }

    private get btnOpenNavBar () {
        return $('.navbar__profile-name');
    }

    private get btnNavBarLogout () {
        return $('.navbar__popup > a[router-go="/logout"]');
    }
    public async logout () {
        await this.btnOpenNavBar.click();
        await this.btnNavBarLogout.click();
        await this.btnSubmit.click();

    }

    public open () {
        return super.open('profile');
    }
}

export default new ProfilePage('https://pyaterochka-team.site');
