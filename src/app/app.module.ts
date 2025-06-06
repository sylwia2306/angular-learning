import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";

@NgModule({
    declarations: [
      AppComponent, 
      NavbarComponent, 
      FooterComponent, 
      ContentComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}