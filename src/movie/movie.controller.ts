import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Movie } from './movie.entity';
import { MoviesService } from './movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findAll(): Movie[] {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Movie {
    const movie = this.moviesService.findOne(+id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  @Post()
  create(@Body() createMovieDto: Omit<Movie, 'id'>): Movie {
    return this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateMovieDto: Partial<Movie>,
  ): Movie {
    const movie = this.moviesService.update(+id, updateMovieDto);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    const deleted = this.moviesService.remove(+id);
    if (!deleted) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
  }
}
