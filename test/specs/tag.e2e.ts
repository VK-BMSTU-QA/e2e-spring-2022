import MainPage from '../pageobjects/main.page'
import EventPage from '../pageobjects/event.page'
import * as assert from 'assert';

describe('Set tags', () => {
    beforeEach(() => {
        MainPage.setWindowSize(1400, 1200);
    });

    it('should add tag', async () => {
        await MainPage.open();
        const tag = 'концерт'
        await MainPage.addTag(tag);
        const eventHref = await MainPage.getEventCardHref();

        await EventPage.open(eventHref);

        const resTag = await EventPage.getTag();

        assert.strictEqual(
          resTag,
          tag,
          `полученный тэг ${resTag} не соответствует ожидаемому ${tag}`,
        );
    });
});


