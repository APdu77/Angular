import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent {
  constructor (private _testService: TestService){
    _testService.count ++;
    console.log(_testService.count);
  }
}
