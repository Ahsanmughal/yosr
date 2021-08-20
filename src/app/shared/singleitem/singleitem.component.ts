import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.scss']
})
export class SingleitemComponent implements OnInit {

  @Input() data;
  item: any;

  constructor() { }

  ngOnInit(): void {
    this.item = this.data;
  }

}
