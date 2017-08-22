import { TreehousePage } from './app.po';

describe('treehouse App', () => {
  let page: TreehousePage;

  beforeEach(() => {
    page = new TreehousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
