import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlatFooterComponent } from './plat-footer/plat-footer.component';

@NgModule({
    declarations: [
        PlatFooterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        PlatFooterComponent
    ]
})
export class ComponentsModule { }