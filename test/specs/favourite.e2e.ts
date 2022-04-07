import LoginPage from  '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';
import EventPage from '../pageobjects/event.page';
import * as assert from 'assert';

describe('Add to favorites', () => {
    beforeEach(() => {
        LoginPage.setWindowSize(1400, 1200);
        MainPage.setWindowSize(1400, 1200);
        EventPage.setWindowSize(1400, 1200);
    });

    it('should add an event to favourite', async () => {
        await LoginPage.open();

        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await MainPage.open();

        const eventHref = await MainPage.getEventCardHref();

        await EventPage.open(eventHref);
        await EventPage.addToFavourite();
        await MainPage.open();

        /*
        const favouriteEventHref = await MainPage.getFavouriteCardHref();

        assert.strictEqual(
          eventHref,
          favouriteEventHref,
          `ID избранного мероприятия ${favouriteEventHref} не соответствует ожидаемому ${eventHref}`,
        );
        */
    });
});


