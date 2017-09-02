import { NexusUploaderClientPage } from './app.po';

describe('nexus-uploader-client App', () => {
  let page: NexusUploaderClientPage;

  beforeEach(() => {
    page = new NexusUploaderClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
