import BmstusaPage from './bmstusa.page';

class MainPage extends BmstusaPage {

    public async isLoggedIn() {
        return await this.headerAvatar.isExisting()
    }

    public async open() {
        return super.open('');
    }
}

export default new MainPage('https://bmstusa.ru');

