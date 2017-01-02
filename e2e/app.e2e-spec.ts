import { OlnwPage } from './app.po';

describe('olnw App', function() {
  let page: OlnwPage;

  beforeEach(() => {
    page = new OlnwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
