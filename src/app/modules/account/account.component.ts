import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { Address } from '../../models/address.model';
import { Title } from '@angular/platform-browser';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeComponent } from '../shared/unsubscribe/unsubscribe.component';
import { SubscriptionManagementComponent } from '../shared/subscription-management/subscription-management.component';
import { SubscriptionComponent } from '../shared/subscription/subscription.component';


@Component({
	selector: 'app-profile',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.sass'],
})
export class AccountComponent implements OnInit {
	file: File = {} as File;
	user: User = {} as User;
	fileName = '';
	loading = true;
	extensions: string[] = ['jpg', 'jpeg', 'png', 'jfif'];

	profileForm: FormGroup = this.formBuilder.group({
		lastname: [null, [Validators.required, Validators.minLength(2)]],
		firstname: [null, [Validators.required, Validators.minLength(2)]],
		address: this.formBuilder.group({
			apartment: null,
			street: null,
			zip: null,
			city: null,
			country: null,
		}),
	});
	constructor(
		private readonly titleService: Title,
		private readonly userService: UserService,
		private readonly authenticationService: AuthenticationService,
		private readonly snackbarService: SnackBarService,
		private readonly formBuilder: FormBuilder,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {

		this.userService
			.getUser(this.authenticationService.decodedToken.id)
			.subscribe((user: User) => {
				this.user = user;
				this.profileForm.patchValue({
					firstname: this.user.firstname,
					lastname: this.user.lastname,
				});
				if (this.user.address) {
					const address: Address = {
						id: this.user.address.id,
						street: this.user.address.street,
						apartment: this.user.address.apartment,
						zip: this.user.address.zip,
						city: this.user.address.city,
						country: this.user.address.country,
					};
					this.profileForm.patchValue({ address });
				}
				this.loading = false;
			});
	}

	/*public onUpload(event: any) {
		if (event.target.files && this.user) {
			const formData = this.imageService.loadImage(event.target.files[0]);
			if (formData)
				this.imageService
					.uploadImage('avatar', this.user.id, formData)
					.subscribe((result: { url: string }) => {
						if (this.user) this.user.avatar = result.url;

						this.snackbarService.openSuccess(
							this.translateService.instant(
								'snackbar.info.image-add'
							)
						);
					});
		}
	}*/

	public onSubmit() {
		if (this.user)
			this.userService
				.updateUser(this.user.id, this.profileForm.value)
				.subscribe(() =>
					this.snackbarService.openSuccess(
						'Done'
						//this.translateService.instant('snackbar.info.saved')
					)
				);
	}

	public subUpdate() {
		const dialogRef = this.dialog.open(SubscriptionManagementComponent, {
			data: {
				userSub: this.user
			},
			maxWidth: '70vw',
			maxHeight: '60vh',
			height: '100%',
			width: '100%',
		});
	}

	public unsub() {
		const dialogRef = this.dialog.open(UnsubscribeComponent, {
			maxWidth: '50vw',
			maxHeight: '40vh',
			height: '100%',
			width: '100%',
		});
	}

	public toSubscribe() {
		const dialogRef = this.dialog.open(SubscriptionComponent, {
			maxWidth: '70vw',
			maxHeight: '60vh',
			height: '100%',
			width: '100%',
		});
	}

	public logout() {
		this.authenticationService.logout();
	}
}
