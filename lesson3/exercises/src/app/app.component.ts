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
  takeOffEnabled: boolean = true;
  clicked: boolean = false;
  leftr: number = 5;
  topbottom: number = 10;
  howManyPx: number = 37;
  lastCSS: number;

  handleTakeOff(img) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 0;
       this.width = 0;
       this.message = 'Shuttle in flight.';

       this.moveRocket(img, 'up');
       this.moveRocket(img, 'up');
       this.moveRocket(img, 'right');
    }
 }

 land(img){
    this.color = 'green';
    this.takeOffEnabled = true;
    this.message = "Space shuttle landed";
    this.clicked = false;
    this.topbottom = 0;

    this.moveRocket(img, 'land');
 }

 abort(img){
   let result = window.confirm("Are you sure you want to abort the mission?");

   if(result){
     this.land(img);
   }
 }

 boundCheck() {
  if(this.leftr >= 95 || this.leftr <= 5 || this.topbottom >= 90 || this.topbottom <= 10){
    this.color = 'orange';
   } else {
     this.color = 'blue';
   }
}

 moveRocket(img, direction: string){
  if(direction === 'land') {
    this.topbottom = 10;
    this.leftr = 5;
    img.style.bottom = `calc(${this.topbottom}% - ${this.howManyPx}px)`;
    img.style.left = `calc(${this.leftr}% - ${this.howManyPx}px)`;
    
    return;
  }

  let moveInt: number = 5;

  if(direction === 'left' || direction === 'down'){
    moveInt = -5;
  }

  if(direction === 'up' || direction === 'down'){
    if((this.topbottom + moveInt) >= 10 && this.topbottom + moveInt <= 90){
      this.topbottom += moveInt;
      img.style.bottom = `calc(${this.topbottom}% - ${this.howManyPx}px)`;
    
      if(direction === 'down'){
        this.height -= 10000;
      } else if(direction === 'up') {
        this.height += 10000;
      }
    }
  } else {
    if((this.leftr + moveInt) >= 5 && this.leftr + moveInt <= 95){
    
      if(this.leftr === 0){
        moveInt += 10
      }

      this.leftr += moveInt;
      img.style.left = `calc(${this.leftr}% - ${this.howManyPx}px)`;
    }
  }
  this.lastCSS = this.leftr
  this.boundCheck();

  if(this.takeOffEnabled === false && this.height === 0) {
    return this.land(img);
  } 
}

}