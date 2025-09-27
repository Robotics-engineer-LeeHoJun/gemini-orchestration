const sessionService = require('../../src/services/sessionService');

describe('Session Creation', () => {
  it('should throw an error when creating a session', async () => {
    await expect(sessionService.createSession('/path/to/project')).rejects.toThrow();
  });
});
