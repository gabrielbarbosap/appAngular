import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';
import { MapComponent } from './components/map/map.component';
import { CreditComponent } from './components/credit/credit.component';
import { BuysComponent } from './components/buys/buys.component';
import { TitleFinancialComponent } from './components/title-financial/title-financial.component';
import { OportunitsComponent } from './components/oportunits/oportunits.component';
import { AboutUserComponent } from './components/about-user/about-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TableActionsComponent,
    MapComponent,
    CreditComponent,
    BuysComponent,
    TitleFinancialComponent,
    OportunitsComponent,
    AboutUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
