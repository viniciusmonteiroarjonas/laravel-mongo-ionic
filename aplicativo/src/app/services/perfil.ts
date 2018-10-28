import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class PerfilProvider{

    public urlPerfil = 'http://localhost:8000/api/perfil';

    constructor(public http:HttpClient){
        
    }

    public findAll():Observable<any>{
        return this.http.get(this.urlPerfil);
    }

    public salvar(perfil):Observable<any>{
        return this.http.post(this.urlPerfil, perfil);
    }

    public editar(perfil):Observable<any>{
        return this.http.put(this.urlPerfil + "/" + perfil._id, perfil);
    }

    public deletar(id):Observable<any>{
       return  this.http.delete(this.urlPerfil + "/" + id);
    }
}