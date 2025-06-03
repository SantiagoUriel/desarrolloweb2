import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent {}
