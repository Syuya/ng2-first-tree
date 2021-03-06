import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';
// 工具栏
import { CaptionModule } from './components/caption/caption.module';

import { Ng2FirstTableComponent } from './ng2-first-table.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CellModule,
    FilterModule,
    PagerModule,
    TBodyModule,
    THeadModule,
    CaptionModule,
  ],
  declarations: [
    Ng2FirstTableComponent,
  ],
  exports: [
    Ng2FirstTableComponent,
  ],
})
export class Ng2FirstTableModule {
}
