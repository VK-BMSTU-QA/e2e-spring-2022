import Page from './page';
import {URL} from '../../constants';

class ProfilePage extends Page {
    public email() {
        return $('input[name=email]');
    }

    public async getEmail() {
        await this.email().waitForDisplayed();
        return this.email().getValue();
    }

    public open() {
        return super.open('profile');
    }
}

export default new ProfilePage(URL);
