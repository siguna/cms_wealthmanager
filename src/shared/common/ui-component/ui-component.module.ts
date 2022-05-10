import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { OnOffComponent } from './on-off/on-off.component';

// import { FileUploadModule } from './file-upload/file-upload.module';
// import { TooltipDirective } from './tooltip/tooltip.directive';
// import { CheckBoxDirective } from './checkbox/checkbox.directive';
// import { ButtonDirective } from './button/button.directive';
// import { TextFieldComponent } from './textfield/textfield.component';
// import { TextAreaCompomnent } from './textarea/textarea.compomnent';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DropdownlistModule } from './dropdownlist/dropdownlist.module';
// import { DatePickerModule } from './datepicker/datepicker.module';
import { DatatablesModule } from './datatables/datatables.module';
// import { HotkeyDirective } from './hotkey/hotkey.directive';
// import { ButtonComponent } from './button/button.component';
// import { CheckBoxComponent } from './checkbox/checkbox.component';
// import { RadioButtonComponent } from './radio-button/radio-button.component';


@NgModule({

    declarations: [
        // ButtonDirective, ButtonComponent, CheckBoxDirective, CheckBoxComponent,
        // OnOffComponent, RadioButtonComponent, CheckBoxDirective,
        // ButtonDirective, TextFieldComponent, TextAreaCompomnent, HotkeyDirective
    ],
    imports: [
        CommonModule,
        // FileUploadModule, FormsModule, ReactiveFormsModule, DatePickerModule, 
        DatatablesModule, 
        // DropdownlistModule
        // BrowserModule
    ],
    // tslint:disable-next-line:max-line-length
    exports: [
        // OnOffComponent, RadioButtonComponent, CheckBoxDirective, CheckBoxComponent, ButtonDirective, TextFieldComponent,
        // TextAreaCompomnent, 
        DatatablesModule, 
        // DatePickerModule, HotkeyDirective, DropdownlistModule, FileUploadModule
    ]
})
export class UiComponentModule { }
