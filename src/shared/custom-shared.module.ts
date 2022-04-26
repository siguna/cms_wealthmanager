import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'mobile-money';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [SharedModule, ReactiveFormsModule, TranslateModule]
})
export class CustomSharedModule { }
