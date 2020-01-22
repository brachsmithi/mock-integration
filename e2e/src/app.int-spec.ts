import { Client } from '@ng-apimock/protractor-plugin';
import { AppPage } from './app.po';

declare const ngApimock: Client;

let page: AppPage;

describe('Demo', () => {

    beforeAll(() => {
        page = new AppPage();
    });

    describe('something', () => {

        it('should do something', async () => {

        });

    });

});