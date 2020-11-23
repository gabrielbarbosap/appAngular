import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';


const modules = [MatTabsModule, MatTableModule, MatRadioModule, MatProgressSpinnerModule, MatSlideToggleModule, MatPaginatorModule,
    MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule, MatAutocompleteModule, MatSnackBarModule,
    MatProgressBarModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSortModule];

@NgModule({
    exports: modules,
    imports: modules

})
export class MaterialModule { }

