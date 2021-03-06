import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { Ng2FirstTableModule } from '../../../ng2-first-table';
import { routes } from './examples.routes';
import { ExamplesComponent } from './examples.component';
import { AdvancedExampleFiltersComponent } from './filter/advanced-example-filters.component';
import { AdvancedExampleConfirmComponent } from './various/advanced-example-confirm.component';
import { AdvancedExamplesCustomEditorComponent } from './custom-edit-view/advanced-example-custom-editor.component';
import { AdvancedExamplesTypesComponent } from './custom-edit-view/advanced-example-types.component';
import { AdvancedExampleServerComponent } from './server/advanced-example-server.component';
import { BasicExampleLoadComponent } from './server/basic-example-load.component';
import { BasicExampleMultiSelectComponent } from './various/basic-example-multi-select.component';
import { CustomEditorComponent } from './custom-edit-view/custom-editor.component';
import { BasicExampleSourceComponent } from './filter/basic-example-source.component';
import { CustomRenderComponent } from './custom-edit-view/custom-render.component';
import { FilterExamplesComponent } from './filter/filter-examples.component';
import { ServerExamplesComponent } from './server/server-examples.component';
import { CustomViewEditExamplesComponent } from './custom-edit-view/custom-edit-view-examples.component';
import { BasicExampleCustomActionsComponent } from './custom-edit-view/basic-example-custom-actions.component';
import { VariousExamplesComponent } from './various/various-examples.component';

import {
  BasicExampleButtonViewComponent,
  ButtonViewComponent,
} from './custom-edit-view/basic-example-button-view.component';

// 单击/双击 事件
import { ClickEventComponent } from './clickEvent/clickEvent.component';
import { ClickExampleComponent } from './clickEvent/click-example.component';
import { DblclickExampleComponent } from './clickEvent/dblclick-example.component';
import { CbeExampleComponent } from './clickEvent/cbe-example.component';
import { AllEventExampleComponent } from './clickEvent/allEvent-example.componenet';
// 隔行换色 、 自定义当前点击背景色
import { GhhsComponent } from './ghhs/ghhs.component';
import { GhhsExampleComponent } from './ghhs/ghhs-example.component';
import { ClickBgcExampleComponent } from './ghhs/clickBgc-example.component';

// 工具栏
import { ToolComponent } from './tool/tool.component';
import { ToolExample1Component } from './tool/tool-example1.component';
import { ToolExample2Component } from './tool/tool-example2.component';
import { ToolExample3Component } from './tool/tool-example3.component';

// 工具栏-汇总
import { HuizongComponent } from './huizong/huizong.component';
import { HuizongExampleComponent } from './huizong/huizong-example.component';

// 工具栏-设置
import { SettingsComponent } from './settings/settings.component';
import { SettingsExampleComponent } from './settings/settings-example.component';

// 工具栏-导出Excel
import { ExportExcelComponent } from './exportExcel/exportExcel.component';
import { ExportExcelExampleComponent } from './exportExcel/exportExcel-example.component';
// 列设置
import { ColumnSettingComponent } from './columnSetting/columnSetting.component';
import { ColumnSettingExampleComponent } from './columnSetting/columnSetting-example.component';
// 新的组件
const NEW_COMPNENTS = [
    // 单击/双击/复选框
    ClickEventComponent,
    ClickExampleComponent,
    DblclickExampleComponent,
    CbeExampleComponent,
    AllEventExampleComponent,
    // 隔行换色 / 自定义当前点击背景色
    GhhsComponent,
    GhhsExampleComponent,
    ClickBgcExampleComponent,
    // 工具栏
    ToolComponent,
    ToolExample1Component,
    ToolExample2Component,
    ToolExample3Component,
    // 工具栏-汇总
    HuizongComponent,
    HuizongExampleComponent,
    // 工具栏-设置
    SettingsComponent,
    SettingsExampleComponent,
    // 工具栏-导出Excel
    ExportExcelComponent,
    ExportExcelExampleComponent,
    // 列设置
    ColumnSettingComponent,
    ColumnSettingExampleComponent,
    
];

const EXAMPLES_COMPONENTS = [
  AdvancedExampleFiltersComponent,
  AdvancedExampleConfirmComponent,
  AdvancedExamplesCustomEditorComponent,
  AdvancedExamplesTypesComponent,
  AdvancedExampleServerComponent,
  BasicExampleLoadComponent,
  BasicExampleMultiSelectComponent,
  BasicExampleSourceComponent,
  CustomEditorComponent,
  CustomRenderComponent,
  FilterExamplesComponent,
  ServerExamplesComponent,
  CustomViewEditExamplesComponent,
  VariousExamplesComponent,
  BasicExampleButtonViewComponent,
  BasicExampleCustomActionsComponent,
  ButtonViewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    Ng2FirstTableModule,
    SharedModule,
  ],
  entryComponents: [
    CustomEditorComponent,
    CustomRenderComponent,
    ButtonViewComponent,
  ],
  declarations: [
    ExamplesComponent,
    ...EXAMPLES_COMPONENTS,
    ...NEW_COMPNENTS,
  ],
})
export class ExamplesModule { }
