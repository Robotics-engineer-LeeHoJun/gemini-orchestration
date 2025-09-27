const geminiService = require('../../src/services/geminiService');

describe('Gemini Service', () => {
  it('should throw an error when initializing a session', async () => {
    await expect(geminiService.initializeSession('/path/to/project')).rejects.toThrow();
  });

  it('should throw an error when sending a message', async () => {
    await expect(geminiService.sendMessage(1, 'test message', [])).rejects.toThrow();
  });
});
