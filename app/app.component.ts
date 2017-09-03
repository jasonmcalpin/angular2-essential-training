/**
 * Starting component.
 * This is the component that is first run based on bootstrap in the main module. 
 * 
 * A component is a dorective with a view.
 * 
 */

import { Component } from '@angular/core';

/**
 * import component from core.
 * 
 * The it is defined. It requires two things.
 * selector: the element name on the html page that will be filled with the template.
 * template: the html code or actual template that will be used to fill selector.
 * 
 * export class: is used to expose a class to the rest of the app.
 * can use back ticks to allow multi-line values that won't break because of line returns.
 * 
 */
@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent { }

/**
 * should use dashes in new element names and be prefixed with name of app
 */