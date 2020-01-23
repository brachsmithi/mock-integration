import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load components', () => {
    page.navigateTo();
    expect(page.dataArrayComponent).not.toBeNull();
    expect(page.dataObjectComponent).not.toBeNull();
  });

});
