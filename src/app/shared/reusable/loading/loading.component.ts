import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  
  @Input() isLoading: boolean = true;
  @Output() returnStatus = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
