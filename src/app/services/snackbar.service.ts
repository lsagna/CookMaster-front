import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class SnackBarService {
	constructor(private snackBar: MatSnackBar) {}

	openSuccess(message: string) {
		this.snackBar.open(message, 'Fermer', {
			duration: 3000,
			horizontalPosition: 'center',
			verticalPosition: 'top',
		});
	}

	openError(message: string) {
		this.snackBar.open(message, 'Fermer', {
			duration: 3000,
			panelClass: ['error-snackbar'],
			horizontalPosition: 'center',
			verticalPosition: 'top',
		});
	}
}
