import LoginPage from  '../pageobjects/login.page';
import * as assert from 'assert';
import SearchPage from '../pageobjects/search.page';
import {screenHeight, screenWidth} from '../../constants';

describe('Search for an existing artist', () => {
    beforeEach(() => {
        SearchPage.setWindowSize(screenWidth, screenHeight);
    });

    it('should return results for partial name of existing artist', async () => {
        await SearchPage.open();

        await SearchPage.searchQuery('twenty');

        const artist = await SearchPage.getFirstTrackArtist();

        const findArtist = 'twenty one pilots';

        assert.strictEqual(artist,findArtist,
            `Найденный исполнитель ${artist} не соответствует ожидаемому ${findArtist}`);
    });
});

describe('Search for non-existing artist', () => {
    beforeEach(() => {
        SearchPage.setWindowSize(1400, 1200);

        it('should return "No results" for random query', async() => {
            await SearchPage.open();

            const searchQuery = 'fhEYIfygE&Fbge67fgeiFGef';

            await SearchPage.searchQuery(searchQuery);

            const noResults = await SearchPage.hasNoResults();

            assert.strictEqual(noResults, true, `По запросу ${searchQuery} были найдены результаты. Ожидалось, что результаты не будут найдены`);
        });
    });
});
