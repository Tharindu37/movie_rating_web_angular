import { Component, Inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

interface MovieRating {
  predicted_result: number;
}
@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.scss',
})
export class MessageBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MovieRating) {}
}
