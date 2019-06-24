import { TelestrationsPage } from './app.po';

describe('telestrations App', () => {
  let page: TelestrationsPage;

  beforeEach(() => {
    page = new TelestrationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
