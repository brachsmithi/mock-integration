import { browser, by, element, ElementFinder, protractor } from 'protractor';

const until = protractor.ExpectedConditions;

export class AppPage {

  appRoot: ElementFinder = element(by.tagName('app-root'));
  dataArrayComponent: ElementFinder = element(
    by.tagName('app-mock-data-array')
  );
  dataObjectComponent: ElementFinder = element(
    by.tagName('app-mock-data-object')
  );
  
  
  navigateTo() {
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);
    // browser.sleep(1200);
    browser.wait(
      until.presenceOf(this.appRoot),
      60000,
      'Page should appear'
    );
    browser.sleep(1200);
  }
}
