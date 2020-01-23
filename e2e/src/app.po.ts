import { browser, by, element, ElementFinder, protractor } from 'protractor';

const until = protractor.ExpectedConditions;

export class AppPage {

  dataArrayComponent: ElementFinder = element(
    by.tagName('app-mock-data-array')
  );
  dataObjectComponent: ElementFinder = element(
    by.tagName('app-mock-data-object')
  );
  
  navigateTo() {
    browser.get(browser.baseUrl);
    browser.waitForAngularEnabled(false);
    browser.sleep(1200);
  }
}
