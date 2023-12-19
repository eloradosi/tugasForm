import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div class="bg-white p-4 shadow-md">
      <p class="text-green-500 font-bold">Form submitted successfully!</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" (click)="closePopup()">Close</button>
    </div>
  `,
})
export class PopupComponent {
  closePopup() {
    // Kirim sinyal tutup ke komponen induk, jika diperlukan
  }
}