import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo: styleUrl -> styleUrls
})
export class AppComponent {
  length = 0;
  includeAlphabets = false;
  includeNumbers = false;
  includeSpecialCharacters = false;
  password = '';

  onUpdateLength(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);
    this.length = isNaN(value) ? 0 : value;
  }

  onChangeUseAlphabets() {
    this.includeAlphabets = !this.includeAlphabets;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSpecialCharacters() {
    this.includeSpecialCharacters = !this.includeSpecialCharacters;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    let validChars = '';
    let mandatoryChars = '';

    if (this.includeAlphabets) {
      validChars += alphabets;
      mandatoryChars += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
    if (this.includeNumbers) {
      validChars += numbers;
      mandatoryChars += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (this.includeSpecialCharacters) {
      validChars += specialCharacters;
      mandatoryChars += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

    // If the length of the password is less than the number of selected categories,
    // limit the password to the length of the password.
    if (this.length < mandatoryChars.length) {
      this.password = this.shuffle(mandatoryChars).slice(0, this.length);
      return;
    }

    let generatedPassword = mandatoryChars;
    for (let i = mandatoryChars.length; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    // Shuffle the generated password to avoid predictable patterns
    this.password = this.shuffle(generatedPassword);
  }

  shuffle(string: string): string {
    const array = string.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }
}
