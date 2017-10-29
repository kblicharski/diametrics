import { Component } from '@angular/core';
import { RestService } from '../../api/rest.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [RestService]
})
export class HistoryComponent {
  userName = 'madsilva';
}
