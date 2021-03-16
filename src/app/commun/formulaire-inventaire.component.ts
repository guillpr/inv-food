import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FacadeService } from '../services/facade.service';

@Component({
  selector: 'app-formulaire-inventaire',
  templateUrl: './formulaire-inventaire.component.html',
  styleUrls: ['./formulaire-inventaire.component.css']
})
export class FormulaireInventaireComponent implements OnInit {

  ajoutProduit = false;

  formulaire = this.fb.group({
    typeProduit: new FormControl(''),
    nouveauProduit:new FormControl('')

  })

  constructor(public facadeService: FacadeService,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.facadeService.ObtenirTypeProduit()
    .subscribe((res) =>{
      console.log(res);
      this.facadeService.listeType = res;
     
      console.log(this.facadeService.listeType);
    });
    
  }
  ajouterProduit(){
    console.log('Valeur du formulaire' , this.formulaire);
  }

}
