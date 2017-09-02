import { Component } from '@angular/core';

/**
 * import component from core.
 * 
 * The it is defined. It requires two things.
 * selector: the element on the html page that will be filled with the template.
 * template: the html code or actual template that will be used to fill selector
 */
@Component({
  selector: 'app',
  template: '<h1>My app</h1>'
})
export class AppComponent {}