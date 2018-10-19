import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadComponent,DialogImport } from './actividad.component';
import { AppMaterialModule } from '../../appmaterial.module';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  entryComponents: [DialogImport],
  declarations: [ActividadComponent,DialogImport]
})
export class ActividadModule { }

