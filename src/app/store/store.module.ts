import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RatesModule } from './rates';
import { RangeModule } from './range';
import { TimelineModule } from './timeline';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RatesModule,
    RangeModule,
    TimelineModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
