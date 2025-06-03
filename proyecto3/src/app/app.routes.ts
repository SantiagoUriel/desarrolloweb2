// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InfoComponent } from './src/components/info/info.component';
import { MusicComponent } from './src/components/music/music.component';
import { BooksComponent } from './src/components/books/books.component';

export const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'music', component: MusicComponent },
  { path: 'books', component: BooksComponent },
];
