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

        it('should load an object element', async () => {
            await ngApimock.selectScenario('object', 'furniture');
            page.navigateTo();

            expect(page.dataObjectComponent).not.toBeNull();
            expect(page.dataObjectComponent.all(by.className('value')).count()).toBe(1);
        });

        it('should load dinner', async () => {
            await ngApimock.selectPreset('dinner');
            page.navigateTo();

            expect(page.dataArrayComponent).not.toBeNull();
            expect(page.dataArrayComponent.all(by.tagName('li')).count()).toBe(2);
            
            expect(page.dataObjectComponent).not.toBeNull();
            expect(page.dataObjectComponent.all(by.className('value')).count()).toBe(1);
        });

    });

});