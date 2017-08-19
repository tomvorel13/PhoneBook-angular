import { PhoneBookAppPage } from './app.po';

describe('phone-book-app App', () => {
  let page: PhoneBookAppPage;

  beforeEach(() => {
    page = new PhoneBookAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
