import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'btn-com',
  templateUrl: './btn-com.component.html',
  styleUrls: ['./btn-com.component.scss']
})
export class BtnComComponent {

  //input directives
  @Input() isFormBtn: boolean = false;
  @Input() isOnlyIcon: boolean = false;
  @Input() btnName: string = '';
  @Input() isDisabled: boolean = false;
  @Input() type: string = 'button';
  @Input() btnText: string = 'Save';

  //output directive
  @Output() dataOutput = new EventEmitter<any>();

  constructor() {
  }

  onClick(data: any){
    this.dataOutput.emit(data);
  }
}
