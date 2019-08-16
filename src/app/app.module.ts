import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";
import { PostsService } from "./posts.service";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
