import { Ng2websitePage } from './app.po';

describe('ng2website App', function() {
  let page: Ng2websitePage;

  beforeEach(() => {
    page = new Ng2websitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
