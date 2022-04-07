import loginPage from "../pageobjects/login.page";

export default async function login() {
        await loginPage.openMain();
        await loginPage.open();

        await loginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await browser.pause(200);
        await loginPage.openMain()
}
