import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DistributeurDto} from '../model/distributeur-dto';
import { InscriptionAssuranceVieProduitFinancierDto } from '../model/inscription-assurance-vie-produit-financier-dto';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private _http :HttpClient) { }

  public connexion(distributeur :DistributeurDto):Observable<any>{
    return this._http.get<DistributeurDto>("http://localhost:8090/assurance-api/Distributeur/login/reference/"+distributeur.reference+"/pwd/"+distributeur.pwd);
  }
  public findById(id :String):Observable<any>{
    return this._http.get<DistributeurDto>("http://localhost:8090/assurance-api/Distributeur/find/id/"+id);
  }
  public findByReference(reference :String):Observable<any>{
    return this._http.get<DistributeurDto>("http://localhost:8090/assurance-api/Distributeur/find/reference/"+reference);
  }
  public findByLibelle(libelle :String):Observable<any>{
    return this._http.get<DistributeurDto>("http://localhost:8090/assurance-api/Distributeur/find/libelle/"+libelle);
  }
  public findAllForDistributeur(id :String):Observable<any>{
    return this._http.get<InscriptionAssuranceVieProduitFinancierDto[]>("http://localhost:8090/assurance-api/IAVPF/find/dist/"+id);
  }
  public generateReport(id :String):Observable<any>{
    return this._http.get("http://localhost:8090/assurance-api/IAVPF/report/IDP/"+id);
  }

}
