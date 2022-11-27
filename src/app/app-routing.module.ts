import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';
import { SearchByLabelComponent } from './search-by-label/search-by-label.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
import { ListLabelsComponent } from './list-labels/list-labels.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AlbumGuard } from './album.guard';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent},
  { path: 'add-album', component: AddAlbumComponent, canActivate: [AlbumGuard]},
  { path: 'update-album/:id', component: UpdateAlbumComponent, canActivate: [AlbumGuard]},
  { path: 'search-by-label', component: SearchByLabelComponent},
  { path: 'search-by-title', component: SearchByTitleComponent},
  { path: 'list-labels', component: ListLabelsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'app-forbidden', component: ForbiddenComponent},
  { path: '', redirectTo: 'albums', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
