import { Component, OnInit } from '@angular/core';
import { DistributeurDto } from '../model/distributeur-dto';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  distributeur  = new DistributeurDto;
  ngOnInit(): void {
  }
  constructor(private _service:ConnectionService,
              private _router : Router,
              private _activatedRoute:ActivatedRoute){}
    
  connecter(){
      this._service.connexion(this.distributeur).subscribe(
        data => {
          this.distributeur=data
          if(this.distributeur != null && this.distributeur.id != null )
          {
            alert("Connexion réussite :"+ this.distributeur.libelle)
            localStorage.setItem("session","true");
            localStorage.setItem("distributeur",this.distributeur.id);
            (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
            (document.getElementById('profil') as HTMLElement).hidden=false;
            (document.getElementById('profil') as HTMLElement).textContent=this.distributeur.libelle;
            this._router.navigate(['/'])
          }
          else
          alert("Erreur : la connexion n'était pas effectuée ")
        },
      error =>alert(" Erreur : la connexion n'était pas effectuée !! ")
    ) 
    
  }

}