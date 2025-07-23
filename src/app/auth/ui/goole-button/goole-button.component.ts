import { Component, output } from '@angular/core';

@Component({
  selector: 'app-goole-button',
  standalone: true,
  imports: [],
  templateUrl: './goole-button.component.html',
  styleUrl: './goole-button.component.scss'
})
export class GooleButtonComponent {
onClick = output<void>();
}
