import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { SearchByLabelComponent } from './search-by-label/search-by-label.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
import { ListLabelsComponent } from './list-labels/list-labels.component';
import { UpdateLabelComponent } from './update-label/update-label.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AddAlbumComponent,
    UpdateAlbumComponent,
    SearchByLabelComponent,
    SearchByTitleComponent,
    ListLabelsComponent,
    UpdateLabelComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
