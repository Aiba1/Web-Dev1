import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumPhotosComponent} from './components/album-photos/album-photos.component';
import {AlbumDetailComponent} from './components/album-detail/album-detail.component';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailComponent, pathMatch: 'full' },
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}