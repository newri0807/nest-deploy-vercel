import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './movie.entity';
import { MoviesService } from './movie.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of movies', () => {
      const result = service.findAll();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const movie: Omit<Movie, 'id'> = {
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      };
      const result = service.create(movie);
      expect(result).toHaveProperty('id');
      expect(result.title).toBe(movie.title);
    });
  });

  describe('findOne', () => {
    it('should find a movie by id', () => {
      const movie: Omit<Movie, 'id'> = {
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      };
      const createdMovie = service.create(movie);
      const result = service.findOne(createdMovie.id);
      expect(result).toEqual(createdMovie);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      const movie: Omit<Movie, 'id'> = {
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      };
      const createdMovie = service.create(movie);
      const updatedMovie = service.update(createdMovie.id, {
        title: 'Updated Movie',
      });
      expect(updatedMovie.title).toBe('Updated Movie');
    });
  });

  describe('remove', () => {
    it('should remove a movie', () => {
      const movie: Omit<Movie, 'id'> = {
        title: 'Test Movie',
        director: 'Test Director',
        releaseYear: 2023,
      };
      const createdMovie = service.create(movie);
      const result = service.remove(createdMovie.id);
      expect(result).toBe(true);
      expect(service.findOne(createdMovie.id)).toBeUndefined();
    });
  });
});
