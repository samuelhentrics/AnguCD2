import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CD } from '../models/cd';

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
  constructor(private formBuilder: FormBuilder) { }

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

  addCd(){
    console.log(this.formulaire.value);
  }

}
