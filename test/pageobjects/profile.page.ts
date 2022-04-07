import Page from './page';

class ProfilePage extends Page {
    public open() {
        return super.open('profile');
    }

    public email() {
        return $('#content > div > div.profile-page__content > form.profile-form > div:nth-child(2) > input');
    }

    public async getEmail() {
        await this.email().waitForDisplayed();
        return this.email().getValue();
    }
}

export default new ProfilePage('https://lostpointer.site');
