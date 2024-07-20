import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../services/state_management/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

  constructor(public countService:CounterService){}
  
}
