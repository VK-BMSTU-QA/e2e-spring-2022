
export const refresh = async () => {
    await browser.execute(() => {
    document.location.reload();
})};
