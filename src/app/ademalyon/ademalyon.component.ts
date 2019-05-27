import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-ademalyon',
  templateUrl: './ademalyon.component.html',
  styleUrls: ['./ademalyon.component.scss']
})
export class AdemalyonComponent implements OnInit {
  constructor() {}
  tiles: Tile[] = [
    { text: 'Les étoiles', cols: 4, rows: 1, color: 'gray' },

    { text: 'Beltegeuse', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'bras droit', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Meissa', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'tête', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Bellatrix', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'bras gauche', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Rigel', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'jambe gauche', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Saiph', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'jambe droite', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Alnitak', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'ceinture  coté gauche', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Alnilam', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'ceinture', cols: 3, rows: 1, color: 'lightgray' },

    { text: 'Mintaka', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'ceinture coté droite', cols: 3, rows: 1, color: 'lightgray' }
  ];
  ngOnInit() {}
}
