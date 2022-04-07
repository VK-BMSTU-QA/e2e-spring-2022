import userPage from  '../pageobjects/user.page';
import * as assert from 'assert';
import login from '../utils/login'


describe('Subscribe and unsubscribe check', () => {
    beforeEach( async () => {
        userPage.setWindowSize(1400, 1200);
        await login();
    });

    it('should subscribe and display user in subscriptions list', async () => {
        const id = '1';
        await userPage.open(id);
        await userPage.subscribe();
        await userPage.goToProfile();
        await userPage.openSubscriptions();
        const subscriptionUserId = await userPage.getLastSubscriptionUserId();

        assert.strictEqual(
          subscriptionUserId,
          id,
          `Id пользователя в списке подписок ${subscriptionUserId} не соответствует пользователю, на которого подписались ${id}`,
        );
    });

    it('should unsubscribe and display no users in subscriptions list', async () => {
        const id = '1';
        await userPage.open(id);
        await userPage.unsubscribe();
        await userPage.goToProfile();
        await userPage.openSubscriptions();
        const subscriptionUserId = await userPage.getLastSubscriptionUserId();

        assert.notEqual(
          subscriptionUserId,
          id,
          `Пользователь все еще находится в подписках`,
        );
    });
});
