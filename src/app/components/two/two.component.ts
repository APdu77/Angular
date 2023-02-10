import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [ TestService ]
})
export class TwoComponent {
  constructor (private _testService: TestService){
    console.log(_testService.count);
    _testService.count ++;
  }

}
