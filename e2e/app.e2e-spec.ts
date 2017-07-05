import { TestProjectFromHomePage } from './app.po';

describe('test-project-from-home App', () => {
  let page: TestProjectFromHomePage;

  beforeEach(() => {
    page = new TestProjectFromHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
