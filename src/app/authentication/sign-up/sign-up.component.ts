import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

	signUpForm: FormGroup = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			Validators.maxLength(40),
			Validators.pattern(
				/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
			),
		]),
		firstname: new FormControl(null, [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(40),
		]),
		lastname: new FormControl(null, [
			Validators.required,
			Validators.minLength(2),
			Validators.maxLength(40),
		]),
	});
  constructor(
	private readonly authenticationService: AuthenticationService,
	private readonly router: Router,
	private readonly snackBarService: SnackBarService
	) { }

  ngOnInit(): void {
  }

  onSubmit() {
	if (this.signUpForm.invalid) {
		this.snackBarService.openError(
			'Le formulaire n\'est pas valide'
		);
		return;
	}

	this.authenticationService.signUp(this.signUpForm.value).subscribe({
		next: (result: User) => {
			if (result) {
				this.snackBarService.openSuccess(
				'Compte créé'
				);
			} else {
				this.snackBarService.openError(
					'Il y a eu une erreur '
				);
			}
		},
		error: error => {
			if (
				error.status === 401 ||
				error.status === 400 ||
				error.status === 404
			)
				this.snackBarService.openError(
					'III'
				);
		},
	});
  }


}
