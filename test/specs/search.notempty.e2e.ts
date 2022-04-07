import * as assert from 'assert';
import SearchPage from '../pageobjects/search.page';
import {screenHeight, screenWidth} from '../../constants';

describe('Search for an existing artist', () => {
    beforeEach(() => {
        SearchPage.setWindowSize(screenWidth, screenHeight);
    });

    it('should return results for partial name of existing artist', async () => {
        SearchPage.open();

        await SearchPage.searchQuery('twenty');

        const artist = await SearchPage.getFirstTrackArtist();

        const findArtist = 'twenty one pilots';

        assert.strictEqual(artist, findArtist,
            `Найденный исполнитель ${artist} не соответствует ожидаемому ${findArtist}`);
    });
});
