/// <reference types="@types/google.maps" />
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Animation = google.maps.Animation;


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterViewInit {
  @ViewChild('map')
  mapElementRef: ElementRef;

  map: google.maps.Map;
  marker: google.maps.Marker;
  geocoder: google.maps.Geocoder;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const styles: google.maps.MapTypeStyle[] = [
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ];
    const songShangStation = new google.maps.LatLng(25.0129716,121.4850676);

    const mapOptions: google.maps.MapOptions = {
      zoom: 19,
      center: songShangStation,
      // disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    };

    this.map = new google.maps.Map(this.mapElementRef.nativeElement, mapOptions);
    this.initMarker(songShangStation);
    this.geocoder = new google.maps.Geocoder();

  }
  private initMarker(latLng: google.maps.LatLng) {
    // this.markers = new google.maps.Marker({
    //   position: songShangStation,
    //   map: this.map
    // });
    // this.clearMarkers();

    this.marker = new google.maps.Marker({
      map: this.map,
      animation: Animation.BOUNCE,
      position: latLng
    });

    this.marker.addListener('click', (e: google.maps.MapMouseEvent) => {
      console.log('clicked: ', e.latLng);

    });


  }


}
