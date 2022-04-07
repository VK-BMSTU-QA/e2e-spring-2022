// // Тут что-то пошло не так, не успел доделать

// import LoginPage from '../pageobjects/login.page';
// import {screenHeight, screenWidth} from '../../constants';
// import MainPage from '../pageobjects/main.page';
// import * as assert from 'assert';
//
// describe('Play first track from "Albums" section', () => {
//     beforeEach(() => {
//         LoginPage.setWindowSize(screenWidth, screenHeight);
//         MainPage.setWindowSize(screenWidth, screenHeight);
//     });
//
//     it('Plays first track from the first album', async () => {
//         LoginPage.open();
//
//         await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
//
//         MainPage.open();
//
//         await MainPage.playFirstAlbum();
//
//         const playerArtist = await MainPage.getPlayerArtistName();
//         const playerTitle = await MainPage.getPlayerTrackTitle();
//
//         await MainPage.openFirstAlbum();
//
//         const artistName = await MainPage.getFirstTrackArtist();
//         const trackTitle = await MainPage.getFirstTrackTitle();
//
//         assert.strictEqual(trackTitle, playerTitle,
//             `Воспроизводимый трек ${playerTitle} не соответствует первому треку ${trackTitle}`);
//         assert.strictEqual(artistName, playerArtist,
//             `Исполнитель ${playerArtist} не соответствует исполнителю первого трека ${artistName}`);
//     });
// });
//

