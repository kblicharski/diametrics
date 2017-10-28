import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent {
  @Input() title: string;
  @Input() link: string;
  @Input() icon: string;
}
