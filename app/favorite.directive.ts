import {Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'  
})

export class FavoriteDirective {
  @HostBinding('class.is-Favorite') isFavorite = true;
  @Input() set mwFavorite(value) {

    this.isFavorite = value;
  }
}