import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CD } from '../models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent implements OnInit {
  // Création d'un formulaire
  formulaire!: FormGroup;
  currentCD$!: Observable<CD>;

  // Injection de dépendence du FormBuilder (services)
  constructor(private formBuilder: FormBuilder,
    private cdservices: CdsService,
    private router: Router) { }

  ngOnInit(): void {
    let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      title: [null, Validators.required, Validators.minLength(3)],
      author: [null, Validators.required, Validators.minLength(3)],
      price: [null, Validators.required, Validators.min(1)],
      thumbnail: [null, Validators.required, Validators.pattern(thumbRegex)],
      dateDeSortie: [null, Validators.required, Validators.minLength(1)],
      quantite: [null, Validators.required, Validators.min(1)],
    },
    {
      updateOn: 'blur'
    }
    )

    // Création du formulaire avec les champs
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      price: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
      onSale: [null]
    });

    // Récupération des valeurs du formulaire en temps réel
    this.currentCD$ = this.formulaire.valueChanges.pipe(
      map(formValue => (
        {
          id:0,
          title: formValue.title,
          author: formValue.author,
          price: formValue.price,
          thumbnail: formValue.thumbnail,
          dateDeSortie: formValue.dateDeSortie,
          quantite: formValue.quantite,
          onSale: formValue.onSale
        }
      ))
    );
  }

  onSubmitForm(){
    let newCd: CD = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      author: this.formulaire.get('author')?.value,
      price: this.formulaire.get('price')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
    };

    this.cdservices.addCD(newCd).pipe(
      tap(() => this.router.navigate(['/catalogue']))
    ).subscribe();


  }

}
