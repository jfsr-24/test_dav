import { NgModule } from '@angular/core';

import { MatFormFieldModule,
         MatMenuModule,
         MatToolbarModule,
         MatCardModule,
         MatButtonModule,
         MatSelectModule,
         MatInputModule,
         MatIconModule,
         MatDialogModule,
         MatRadioModule,
         MatCheckboxModule,
         MatListModule,
         MatChipsModule,
         MatPaginatorModule,
         MatGridListModule,
        //  MatRadioButton,
        //  MatRadioGroup,
        //  MatTableDataSource, 
        //  MatDialog,
         MatTableModule
        } from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    MatPaginatorModule,
    MatGridListModule
    // MatRadioButton,
    // MatRadioGroup,
    // MatDialog
    // MatTableDataSource
  ]
})
export class AppMaterialModule {}