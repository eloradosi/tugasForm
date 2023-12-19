import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';
import { ApiService } from './api.service';

@Component({
  // ...
})
export class AppComponent {
  formData: any = {}; // Sesuaikan dengan model data Anda

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  onSubmit() {
    this.apiService.submitForm(this.formData).subscribe(
      response => {
        const dialogRef = this.dialog.open(PopupComponent);

        dialogRef.afterClosed().subscribe(result => {
          console.log(Dialog closed: ${result});
        });
      },
      error => {
        console.error('Error submitting form:', error);
        // Handle error jika diperlukan
      }
    );
  }
}