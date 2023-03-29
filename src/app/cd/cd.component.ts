import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CD } from '../models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})

// Implementer le OnInit
export class CdComponent implements OnInit {
  @Input() leCd !: CD;

  unCd!: CD;
  idcd!:string;

  constructor(private cdservices:CdsService, private router:ActivatedRoute ) { }

  ngOnInit(): void {
    // Cas où page avec parametre
    const idcd = this.router.snapshot.params['id'];
    if(idcd !== undefined){
      // Le + transforme la chaine de caractère en nombre
      this.unCd = this.cdservices.getCDById(+idcd);
      this.idcd = idcd;
    }
    else{
      this.unCd = this.leCd;
    }
  }

  onAddCD(){
    this.leCd.quantite++;
  }
}
