import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.less'],
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite-alias')
  isFavoriteAlias: boolean;

  @Input()
  isFavorite: boolean;
  constructor() {}

  @Output()
  changeMy = new EventEmitter();

  ngOnInit(): void {}

  onClick(): void {
    this.isFavorite = !this.isFavorite;
    console.log('isFavoriteAlias', this.isFavoriteAlias);
    this.changeMy.emit({ newVal: this.isFavorite });
  }

}

export interface FavAnotetion {
  newVal: boolean;
}
