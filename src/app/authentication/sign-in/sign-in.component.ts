import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

	signInForm: FormGroup = new FormGroup({
		email: new FormControl(null, [
			Validators.required,
			Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
		]),
		password: new FormControl(null, [
			Validators.required,
			Validators.minLength(8),
		]),
		device: new FormControl(null),
	});
  constructor(
	private readonly authenticationService: AuthenticationService,
	private readonly router: Router,
	private readonly snackBarService: SnackBarService
	) { }

  ngOnInit(): void {
	if (this.authenticationService.isLogged())
	this.router.navigate(['/i']).then();
  }

  onSubmit() {
	if (this.signInForm.invalid) {
		this.snackBarService.openError(
			'Le formulaire n\'est pas valide'
		);
		return;
	}

	this.authenticationService.signIn(this.signInForm.value).subscribe({
		next: (result: { token: string; refreshKey: string }) => {
			const isLogged =
				this.authenticationService.setLoginData(result);
			if (isLogged) {
				this.router.navigate(['/']).then();
			} else {
				this.snackBarService.openError(
					''
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
