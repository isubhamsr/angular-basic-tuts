import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { AComponent } from './components/state_management/a/a.component';
import { B1Component } from './components/state_management/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, JokesComponent, AComponent, B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello';
  childData!:String

  users = [
    {name: "Subham", isSingle: false, salary: 1000}, 
    {name: "Torsha", isSingle: true, salary: 10000},
    {name: "Ritam", isSingle: true, salary: 10500},
  ]

  receveData(value:String){
    console.log(`Event from child ${value}`)
    this.childData = value
  }
}
