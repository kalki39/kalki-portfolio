import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private apiUrl='https://api.telegram.org/bot7003172285:AAHRKrvFBK_1KEW1ep1ODtP6DfX1030gcwA/sendMessage';

  constructor(private _translationLoaderService: TranslationLoaderService,private formBuilder: FormBuilder,
    private http: HttpClient,private _snackBar: MatSnackBar
  ) {
    this._translationLoaderService.loadTranslations(english, french);
    
  
  
  }


  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      identite: ['', Validators.required], // Add validators as needed
      email: ['', [Validators.required, Validators.email]], // Example of multiple validators
      object: ['', Validators.required],
      comment: ['']
    });
  }


  onSubmit(): void {
    // Handle form submission here
    console.log(this.contactForm);
    if (this.contactForm.valid) {
      console.log(this.contactForm.value); // You can send the form data to your backend or perform other actions
      this.sendMessageToDeiva(this.contactForm.value)
    }else{
      this.openSnackBar("Please enter correct details")
    }
  }

  sendMessageToDeiva(message: any): void {

    const chatId = '1198072586';
    let payload = {
      chat_id : chatId,
      text:`Name:\n${message.identite}\n\nEmail:\n${message?.email}\n\nSubject:\n${message?.object}\n\nComments:\n${message?.comment}`
    }
    this.http.post(this.apiUrl, payload).subscribe(() => this.openSnackBar("Enquiry Message sent succesfully"),
      error => console.error('Error sending message:', error)
    );
  }
  openSnackBar(show?:any) {
    this._snackBar.open(show, 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
}