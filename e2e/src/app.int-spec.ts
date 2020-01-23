import { Client } from '@ng-apimock/protractor-plugin';
import { AppPage } from './app.po';
import { by } from 'protractor';

declare const ngApimock: Client;

let page: AppPage;

describe('Demo', () => {

    beforeAll(() => {
        page = new AppPage();
    });

    describe('Mock App', () => {

        it('should load a single array element', async () => {
            await ngApimock.selectScenario('array', 'one');
            page.navigateTo();

            expect(page.dataArrayComponent).not.toBeNull();
            expect(page.dataArrayComponent.all(by.tagName('li')).count()).toBe(1);
        });

    });

});