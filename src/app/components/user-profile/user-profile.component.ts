import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContryCodePipe } from '../../pipes/contry-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(params:String) {
  return "Hi, " + params
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, ContryCodePipe, HighlightDirective ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name:String = "Subham"
  age:Number = 20
  salary:number = 4000
  isButtonDisable:Boolean = true
  inputValue:String = "test"
  phoneNumber:Number = 123456789

  bgColor:String = "red"

  // @Input({transform:formatName}) name:String = ""
  // @Input({transform:booleanAttribute}) isSingle!:Boolean
  // @Input({transform:numberAttribute}) salary!:Number

  @Output() myEvent = new EventEmitter<String>()

  parentTitle:String = ""

  users = [
    {name: "Subham", isSingle: false, salary: 1000}, 
    {name: "Torsha", isSingle: true, salary: 10000},
    {name: "Ritam", isSingle: true, salary: 10500},
  ]

  onChange(event:Event){
    const value:String = (event.target as HTMLInputElement).value
    console.log("input change  " + value)
    this.parentTitle = value

    this.myEvent.emit(this.parentTitle)
  }

  sendData(){
    this.myEvent.emit("Child to parent")
  }
}
