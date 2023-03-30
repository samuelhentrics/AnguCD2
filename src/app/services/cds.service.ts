import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CD } from '../models/cd';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CdsService{

  constructor(private http : HttpClient) { }

  getAllCDs() : Observable<CD[]>{
    return this.http.get<CD[]>('http://localhost:3000/CD');
    
  }

  getCDById(id: number) : Observable<CD>{
    const cd = this.http.get<CD>('http://localhost:3000/CD/' + id);
    if (cd === undefined){
      throw new Error('CD not found');
    }
    return cd;
  }

  addCD(cd: CD) : Observable<CD>{
    return this.getAllCDs().pipe(
      // Trier les CD par id (liste de CD)
      map(cds => [...cds].sort((a,b) => a.id - b.id)),
      // Récupérer le dernier CD
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      // Ajouter 1 à l'id du nouveau CD à créer
      map(cd_max => (cd.id = cd_max.id + 1)),
      // Créer le nouveau CD dans l'api
      switchMap(cd => this.http.post<CD>('http://localhost:3000/CD', cd))
    );
  }
}
