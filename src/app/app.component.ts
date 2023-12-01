import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as math from 'mathjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index11 = new FormControl('');
  index12 = new FormControl('');
  index13 = new FormControl('');
  index21 = new FormControl('');
  index22 = new FormControl('');
  index23 = new FormControl('');
  index31 = new FormControl('');
  index32 = new FormControl('');
  index33 = new FormControl('');

  toggle = 'two';
  result: any;
  
  toggleMatrix(type: string) {
    this.toggle = type
  }

  calcule() {
    if (this.toggle === 'two') {
      let A = [
        [this.index11.value, this.index12.value],
        [this.index21.value, this.index22.value]
      ];
      this.result = math.det(A);
    } else {
      let B = [
        [this.index11.value, this.index12.value, this.index13.value],
        [this.index21.value, this.index22.value, this.index23.value],
        [this.index31.value, this.index32.value, this.index33.value]
      ]
      this.result = math.det(B);
    }
    
    

  }
}


