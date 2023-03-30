import { Component, OnInit } from '@angular/core';
import { CD } from 'src/app/models/cd';
import { CdsService } from '../services/cds.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-cds',
  templateUrl: './list-cds.component.html',
  styleUrls: ['./list-cds.component.scss']
})
export class ListCDsComponent implements OnInit {
  // Observable doit avoir un dollar à la fin
  listcd$!: Observable<CD[]>;

  constructor(private myCDservices : CdsService) { }

  ngOnInit():void{
    this.listcd$ = this.myCDservices.getAllCDs();
  }
  
}
