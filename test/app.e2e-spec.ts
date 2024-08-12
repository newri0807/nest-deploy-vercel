import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MovieModule } from 'src/movie/movie.module';

describe('MoviesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MovieModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/movies (GET)', () => {
    return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
  });

  it('/movies (POST)', () => {
    return request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.id).toBeDefined();
        expect(res.body.title).toBe('Test Movie');
      });
  });

  it('/movies/:id (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      });

    const movieId = createResponse.body.id;

    return request(app.getHttpServer())
      .get(`/movies/${movieId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toBe(movieId);
        expect(res.body.title).toBe('Test Movie');
      });
  });

  it('/movies/:id (PUT)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      });

    const movieId = createResponse.body.id;

    return request(app.getHttpServer())
      .put(`/movies/${movieId}`)
      .send({ title: 'Updated Movie' })
      .expect(200)
      .expect((res) => {
        expect(res.body.id).toBe(movieId);
        expect(res.body.title).toBe('Updated Movie');
      });
  });

  it('/movies/:id (DELETE)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      });

    const movieId = createResponse.body.id;

    await request(app.getHttpServer()).delete(`/movies/${movieId}`).expect(200);

    return request(app.getHttpServer()).get(`/movies/${movieId}`).expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
