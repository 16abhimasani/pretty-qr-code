import { TestWindow } from '@stencil/core/testing';
import { PrettyQRCode } from './pretty-qr-code';

describe('pretty-qr-code', () => {
  it('should build', () => {
    expect(new PrettyQRCode()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPrettyQRCodeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PrettyQRCode],
        html: '<pretty-qr-code></pretty-qr-code>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('TODO');
    });
  });
});
