import { Component } from '@angular/core';
import { UsuarioProvider } from '../services/usuarios';
import { PerfilProvider } from '../services/perfil';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[UsuarioProvider, PerfilProvider, Camera, Geolocation]
})
export class HomePage {

  public usuarios = [];
  public perfis = [];


  public usuarioCadastro = {"name":"", "email":"","password":"","idade":"","telefone":"","_id":"", perfil:null, "foto":"", "lat":null,"long":null};

  constructor(
    private usuarioService:UsuarioProvider,
    private perfirService:PerfilProvider,
    private camera: Camera,
    private geolocation: Geolocation,
  ){
    this.getUsuarios();
    this.getPerfis();
  }

  public tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.usuarioCadastro.foto = base64Image;
     console.log(base64Image);
    }, (err) => {
     // Handle error
    });
  }

  public getUsuarios(){
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

  public getPerfis(){
    this.perfirService.findAll().subscribe(response => this.perfis = response);
  }

  public popularForm(usuario) {
    console.log(usuario);
      this.usuarioCadastro = usuario;
  }

  public compareFn(e1: any, e2: any) : boolean{
    return e1 && e2 ? e1.id === e1.id : e1 === e2;
  }

  public salvarUsuario(){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.usuarioCadastro.lat = resp.coords.latitude
      this.usuarioCadastro.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    if(this.usuarioCadastro ._id == ""){
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    }else{
      this.usuarioService.editar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    }
    
  }

  public deletar(id){
    this.usuarioService.deletar(id).subscribe(response => this.getUsuarios());
  }

}
