import { LeanAngularDialogPage } from './app.po';

describe('lean-angular-dialog App', () => {
  let page: LeanAngularDialogPage;

  beforeEach(() => {
    page = new LeanAngularDialogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
