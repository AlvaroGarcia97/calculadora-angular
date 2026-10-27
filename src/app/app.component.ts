import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display = '0';
  current = '';
  operator = '';
  previous = '';

  press(num: string): void {
    if (this.display === '0' && num !== '.') {
      this.display = num;
    } else {
      this.display += num;
    }
  }

  clear(): void {
    this.display = '0';
    this.current = '';
    this.operator = '';
    this.previous = '';
  }

  decimal(): void {
    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  operation(op: string): void {
    this.previous = this.display;
    this.operator = op;
    this.display = '0';
  }

  equals(): void {
    if (!this.previous || !this.operator) return;
    const a = parseFloat(this.previous);
    const b = parseFloat(this.display);
    let res = 0;
    if (this.operator === '+') res = a + b;
    if (this.operator === '-') res = a - b;
    if (this.operator === '*') res = a * b;
    if (this.operator === '/') res = b === 0 ? 0 : a / b;
    this.display = res.toString();
    this.operator = '';
    this.previous = '';
  }
}
