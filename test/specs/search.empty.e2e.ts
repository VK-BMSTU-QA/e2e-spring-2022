import SearchPage from '../pageobjects/search.page';
import * as assert from 'assert';
import {screenHeight, screenWidth} from '../../constants';

describe('Search for non-existing artist', () => {
    beforeEach(() => {
        SearchPage.setWindowSize(screenWidth, screenHeight);
    });

    it('should return "No results" for random query', async () => {
        await SearchPage.open();

        const searchQuery = 'fhEYIfygE&Fbge67fgeiFGef';

        await SearchPage.searchQuery(searchQuery);

        const noResults = await SearchPage.hasNoResults();

        assert.strictEqual(noResults, true,
            `По запросу ${searchQuery} были найдены результаты. Ожидалось, что результаты не будут найдены`);
    });
});
