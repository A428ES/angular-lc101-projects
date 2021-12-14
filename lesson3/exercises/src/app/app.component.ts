import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  clicked = false;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

 boundCheck(location) {
  if (location - 5 < 0 || location+25 > 100) {
    this.color = "orange";
  } else {
    this.color = "blue";
  }
}

 moveRocket(img, direction: string){

  let moveInt: number = 5;
  let movement: string;
  
  this.height = direction === 'up' ? this.height += 10000 : this.height;
  this.height = direction === 'down' ? this.height -= 10000 : this.height;

  if(direction === 'left' || direction === 'down'){
    moveInt = -5;
  }
  let vamanos
  if(direction === 'left' || direction === 'right'){

    movement = parseInt(img.style.left) + moveInt + '%';
    if(parseInt(img.style.left) + moveInt >= 0 && (parseInt(img.style.left) + moveInt)+10 < 100 ){
    img.style.left = movement;}
    vamanos = parseInt(img.style.left);
  } else {
    movement = parseInt(img.style.bottom) + moveInt + '%';
    if(parseInt(img.style.bottom) + moveInt >= 0 && (parseInt(img.style.bottom) + moveInt)+10 < 100 ){
    img.style.bottom = movement;}
    vamanos = parseInt(img.style.bottom);
  }

  vamanos += moveInt;  

  this.boundCheck(vamanos);
}

}