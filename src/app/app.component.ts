import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ConnectionService} from './services/connection.service';
import { DistributeurDto } from './model/distributeur-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title='Assurance de vie';
  distributeur  = new DistributeurDto;

  constructor(private _router : Router,
    private _activatedRoute:ActivatedRoute,
    private _service:ConnectionService,){}
  
    ngOnInit(): void {
      if(localStorage.getItem("session") == null)
      { 
        localStorage.setItem("session","false");
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        this._router.navigate(['Login'])

      }
      else if(localStorage.getItem("session") == "false"){
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
        this._router.navigate(['Login'])
      }
      else if(localStorage.getItem("session") == "true"){
        (document.getElementById('login') as HTMLElement).textContent="Deconnexion";
        (document.getElementById('profil') as HTMLElement).hidden=false;
        const id = localStorage.getItem("distributeur");
        if(id != null){
          this._service.findById(id).subscribe(
            data => {
              this.distributeur=data;
              if(this.distributeur != null && this.distributeur.id != null )
              {
                (document.getElementById('profil') as HTMLElement).textContent=this.distributeur.libelle;
                this._router.navigate(['/'])
              }
              else
              this.connexion()
            },
            error =>this.connexion()
          )
        }
        this._router.navigate(['/'])
      }
    }

    profil(){
      this._router.navigate(['/'])
    }
    connexion(){
        localStorage.setItem("session","false");
        (document.getElementById('login') as HTMLElement).textContent="Connexion";
        (document.getElementById('profil') as HTMLElement).hidden=true;
      this._router.navigate(['Login'])
      
    }

  
}