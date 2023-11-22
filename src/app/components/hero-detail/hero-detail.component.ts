import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    // PARA INICIALIZAR UN OBJETO DEFINIRLO VACIO O CON UN SIGNO DE ADMIRACION AL FINAL, SINO TIRA ERROR
    @Input() hero: Hero = { 
        id: 0,
        name: 'uno',
    }

    constructor() { }
  
    ngOnInit() {
    }

}
