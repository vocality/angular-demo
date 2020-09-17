import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Angular tutorial';
  id = '1245opi789';
  obj1 = {
    id: this.id,
    track_name: 'vdo-ramonv',
    timestamp: '2020-09-16'
  }
  obj2 = {
    track_name: 'vdo-tlse'
  }
  firstArray = [1, 2, 3, 4];

  getId() {
    return this.id; 
  }
}
