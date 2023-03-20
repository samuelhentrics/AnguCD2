import { Component, Input } from '@angular/core';
import { CD } from '../models/cd';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {
  @Input() leCd !: CD;


  onAddCD(){
    this.leCd.quantite++;
  }
}
