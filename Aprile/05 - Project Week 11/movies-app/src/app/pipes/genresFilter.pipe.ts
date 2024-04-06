import { Pipe, PipeTransform } from '@angular/core';
import { Genres } from 'src/app/models/genres.interface';

@Pipe({ name: 'genresFilter' })
export class GenresFilterPipe implements PipeTransform {
    transform(allGenres: Genres[], genreIds: number[]): Genres[] {
        return allGenres.filter(genre => genreIds.includes(genre.id));
    }
}