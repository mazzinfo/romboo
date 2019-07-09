import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGuestPipe } from './search-guest.pipe';

@NgModule({
  declarations: [SearchGuestPipe],
  imports: [
    CommonModule
  ],
  exports:[SearchGuestPipe]
})
export class PipesModule { }
