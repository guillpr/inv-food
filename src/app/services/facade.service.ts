import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Type } from '../entitees/type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  //Liste objets
  //Liste objets

  //Liste objets
  //Liste objets

  //Liste objets
  //Liste objets
  //Liste objets
  //Liste objets

  public listeType!: Type[];

  // URL
  private typeProduitUrl = environment.apiBaseUrl + "Produits/type"
  private typeCommandUrl = environment.apiBaseCommandUrl + "commands"

  constructor(private http: HttpClient) { }

  public ObtenirTypeProduit():Observable<Type[]>{
    return this.http.get<Type[]>(this.typeCommandUrl);
  }
}
