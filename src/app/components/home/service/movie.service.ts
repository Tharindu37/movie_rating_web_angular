import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { MovieData } from '../models/movie-data';
import { response } from 'express';
import { Observable } from 'rxjs';

interface MovieRating {
  predicted_result: number;
}
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  predictMovieRating(movieData: MovieData): Observable<MovieRating> {
    const url = 'http://192.168.1.199:8002/predict';
    return this.http.post<MovieRating>(url, movieData);
  }
}
