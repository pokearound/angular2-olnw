import { Angular2OlnwPage } from './app.po';

describe('angular2-olnw App', () => {
  let page: Angular2OlnwPage;

  beforeEach(() => {
    page = new Angular2OlnwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
