import { MyNewAppPage } from './app.po';

describe('my-new-app App', () => {
  let page: MyNewAppPage;

  beforeEach(() => {
    page = new MyNewAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
