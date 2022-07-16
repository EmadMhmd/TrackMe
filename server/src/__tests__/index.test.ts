import supertest from 'supertest';
import app from '../../server';

const req = supertest(app);

describe('Test the server', () => {
  it('Test endpoint', async () => {
    const res = await req.get('/');
    expect(res.status).toBe(200);
  });
});
