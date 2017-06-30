import { CzAdminUIPage } from './app.po';

describe('cz-admin-ui App', () => {
  let page: CzAdminUIPage;

  beforeEach(() => {
    page = new CzAdminUIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
