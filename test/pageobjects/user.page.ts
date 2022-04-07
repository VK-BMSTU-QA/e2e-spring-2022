import BmstusaPage from './bmstusa.page';

class UserPage extends BmstusaPage {

    public get subscribeButton() {
        return $('#subscribeButton');
    }

    public get unsubscribeButton() {
        return $('#unsubscribeButton');
    }

    public get subscriptionsButton() {
        return $('#subscriptionsButton');
    }

    public get lastSubscribtionUser() {
        return $('.users-li');
    }

    public async subscribe() {
        await this.subscribeButton.waitForClickable();
        await this.subscribeButton.click();
    }

    public async unsubscribe() {
        await this.unsubscribeButton.waitForClickable();
        await this.unsubscribeButton.click();
    }

    public async openSubscriptions() {
        await this.subscriptionsButton.waitForClickable();
        await this.subscriptionsButton.click();
    }

    public async getLastSubscriptionUserId() {
        const user = await this.lastSubscribtionUser;
        const isPresent = await user.isExisting();
        if (!isPresent) {
            return null;
        }
        const href = await user.getAttribute('href');
        return href.split('=')[1];
    }

    public async open(id: string) {
        return super.open('user?id=' + id);
    }
}

export default new UserPage('https://bmstusa.ru');
