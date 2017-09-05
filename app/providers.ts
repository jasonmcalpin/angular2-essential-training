import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupLists = {
  mediums: ['Movies', 'Series', 'Shorts'],
  categories: ['Action', 'Science Fiction', 'Comedy', 'Drama', 'Horror', 'Romance']
}