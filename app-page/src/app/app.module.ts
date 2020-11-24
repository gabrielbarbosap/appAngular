import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';
import { CreditComponent } from './components/credit/credit.component';
import { BuysComponent } from './components/buys/buys.component';
import { TitleFinancialComponent } from './components/title-financial/title-financial.component';
import { OportunitsComponent } from './components/oportunits/oportunits.component';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TableActionsComponent,
    GraphComponent,
    CreditComponent,
    BuysComponent,
    TitleFinancialComponent,
    OportunitsComponent,
    AboutUserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
