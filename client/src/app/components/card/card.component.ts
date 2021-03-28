import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}
}
