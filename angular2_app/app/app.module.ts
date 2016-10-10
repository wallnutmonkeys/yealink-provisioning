import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { T46gComponent } from './t46g/t46g.component';
import { T46gKeysComponent } from './t46g/t46g-keys.component';
import { T46gDirectoryComponent } from './t46g/t46g-directory.component';
import { T46gAccountComponent } from './t46g/t46g-account.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { 
        'path': 'keys',
        'component': T46gKeysComponent 
      },
      { 
        'path': 'directory',
        'component': T46gDirectoryComponent 
      },
      { 
        'path': 'accounts',
        'component': T46gAccountComponent 
      }

    ]),
  ],
  declarations: [ 
    T46gComponent, 
    T46gAccountComponent, 
    T46gDirectoryComponent, 
    T46gKeysComponent 
  ],
  bootstrap: [ T46gComponent ]
})
export class AppModule { }
