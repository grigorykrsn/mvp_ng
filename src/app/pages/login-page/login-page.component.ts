import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  public profileForm!: FormGroup;
  public loginValid = true;

  public initializeForm(): FormGroup {
    this.profileForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.pattern(/^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });
    return this.profileForm;
  }

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  public onSubmit(): void {}
}
