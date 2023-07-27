import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var google: { maps: { Map: new (arg0: HTMLElement | null, arg1: { center: { lat: number; lng: number; }; zoom: number; }) => any; Marker: new (arg0: { position: { lat: number; lng: number; }; map: any; }) => any; InfoWindow: new (arg0: { content: string; }) => any; }; };

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage {
  nombre: string = "";
  apellido: string = "";
  latitud: number = 0;
  longitud: number = 0;

  constructor(private platform: Platform) {}

  mostrarMapa() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.latitud, lng: this.longitud },
      zoom: 8,
    });

    const marker = new google.maps.Marker({
      position: { lat: this.latitud, lng: this.longitud },
      map: map,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<b>${this.nombre} ${this.apellido}</b><br>${this.latitud}, ${this.longitud}`,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }
}
