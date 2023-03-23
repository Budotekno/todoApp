import { Component } from '@angular/core';
import { Model, TodoYapılacaklar } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  goster = false;

  model = new Model();

  gelenKullaniciAdi(){

    return this.model.kullaniciAdi;

  }

  gelenYapilacaklar(){
    if (!this.goster) {

      return this.model.yapılacaklar.filter(i=> !i.durum);

    }

    return this.model.yapılacaklar;

  }


  listeyeEkle(gelenYazi:string){

    if (gelenYazi !="") {

      let deger = new TodoYapılacaklar(gelenYazi,false);
      this.model.yapılacaklar.push(deger);


    }



  }

}
