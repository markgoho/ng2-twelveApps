import { NgBusinessListingPage } from './app.po';

describe('ng-business-listing App', function() {
  let page: NgBusinessListingPage;

  beforeEach(() => {
    page = new NgBusinessListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
