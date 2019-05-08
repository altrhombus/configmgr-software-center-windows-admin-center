import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableModule } from '@microsoft/windows-admin-center-sdk/angular';
import { SoftwareCenterComponent } from './software-center.component';
import { Routing } from './software-center.routing';
import { SoftwareCenterService } from './software-center.service';


@NgModule({
  declarations: [SoftwareCenterComponent],
  providers: [SoftwareCenterService],
  imports: [
    CommonModule,
    DataTableModule,
    Routing
  ]
})
export class SoftwareCenterModule { }
