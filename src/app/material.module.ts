import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
	declarations: [	],
	imports: [],
	exports: [
		MatButtonModule,
		MatListModule,
		MatCardModule,
		MatToolbarModule,
		MatRippleModule,
		MatGridListModule,
		MatIconModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatInputModule,
		MatSelectModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatTabsModule,
		MatExpansionModule,
		MatSidenavModule,
		MatAutocompleteModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatNativeDateModule,
		MatRadioModule,
	],
	providers: []
})
export class MaterialModule { }