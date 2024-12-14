describe('Dynamic Controls Test', function () {
    
    const dynamicControlsXpath = "//*[@href='/dynamic_controls']";
    const headerTextLocator = 'h4';
    const expectedHeaderText = 'Dynamic Controls';
    const checkBoxLocator = "//*[@id='checkbox']";

    const goneAndBackTextLocator = '#message';

    const removeButton = "//button[contains(text(), 'Remove')]";
    const addButton = "//button[contains(text(), 'Add')]";

    async function waitForElementWithText(selector: string, text: string, timeout: number = 5000): Promise<void> {
        await browser.waitUntil(
            async () => {
                const element = await $(selector);
                if (!(await element.isDisplayed())) return false;
                const elementText = await element.getText();
                return elementText === text; 
            },
            {
                timeout,
                timeoutMsg: `Текст "${text}" не был найден в элементе с селектором "${selector}" в течение ${timeout} мс. Проверьте отображение элемента или текст.`,
            }
        );
    }
    
    before(async function () {
        await browser.maximizeWindow();
      });

    it('should added and removed checkbox', async function () {
        // Открыть урлу
        await browser.url('https://the-internet.herokuapp.com/');

        // Перейти на страницу Dynamic Controls
        await $(dynamicControlsXpath).click();

        // Дождаться появления кнопки Remove
        await $(removeButton).waitForDisplayed();

        // Завалидировать текст в заголовке страницы
        const actualHeaderText = await $(headerTextLocator).getText();
        expect(actualHeaderText).toContain(expectedHeaderText);

        // Чекнуть чекбокс
        await $(checkBoxLocator).click();

        // Кликнуть по кнопке Remove
        await $(removeButton).click();

        // Дождаться исчезновения чекбокса
        await $(checkBoxLocator).waitForDisplayed({
             reverse: true 
            });

        // Проверить наличие кнопки Add
        await $(addButton).waitForDisplayed();

        
        //Наша функция тут, валидируем текст It's gone!
        await waitForElementWithText(goneAndBackTextLocator, "It's gone!", 5000); //ошибка нарочно, дабы проверить функцию

        // Кликнуть на кнопку Add
        await $(addButton).click();

        // Дождаться появления чекбокса
        await $(checkBoxLocator).waitForDisplayed();

        // Наша функция тут, валидируем текст "It`s back!"
        await waitForElementWithText(goneAndBackTextLocator, "It's back!", 5000);
    });
});
