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
        const eventId = eventHref.split('=').pop();

        await EventPage.open(eventId);
        await EventPage.addToFavourite();
        await MainPage.open();

        const favouriteEventId = await MainPage.getFavouriteEventId();

        assert.strictEqual(
          eventId,
          favouriteEventId,
          `ID избранного мероприятия ${eventId} не соответствует ожидаемому ${favouriteEventId}`,
        );
    });
});
