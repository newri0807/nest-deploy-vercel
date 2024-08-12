import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      releaseYear: 2010,
    },
    {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      releaseYear: 1972,
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      releaseYear: 1994,
    },
    {
      id: 4,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releaseYear: 1994,
    },
    {
      id: 5,
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      releaseYear: 2008,
    },
  ];

  findAll(): Movie[] {
    return this.movies;
  }

  findOne(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  create(movie: Omit<Movie, 'id'>): Movie {
    const newMovie = { id: Date.now(), ...movie };
    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: number, movieData: Partial<Movie>): Movie {
    const movie = this.findOne(id);
    if (movie) {
      Object.assign(movie, movieData);
    }
    return movie;
  }

  remove(id: number): boolean {
    const index = this.movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      return true;
    }
    return false;
  }
}
