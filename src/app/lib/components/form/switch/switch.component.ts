import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <label class="relative my-auto inline-flex items-center cursor-pointer">
      <input type="checkbox" (change)="onChange()" [checked]="value" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  `
})
export class SwitchComponent {
  @Output() switched = new EventEmitter<boolean>();
  @Input() value = false;

  onChange() {
    this.value = !this.value;
    this.switched.emit(this.value);
  }
}
