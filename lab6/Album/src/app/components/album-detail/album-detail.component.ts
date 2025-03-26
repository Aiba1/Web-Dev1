import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AlbumsService} from '../../services/albums.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: any;
  newTitle: string = '';

  constructor(
    private router: Router,
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.newTitle = this.album.title;
    });
  }

  saveChanges() {
    if (!this.album) {
      console.error("Album is null, cannot update.");
      return;
    }
  
    this.albumsService.updateAlbum(this.album.id, this.newTitle).subscribe({
      next: () => {
        console.log("Album updated successfully!");
        this.album!.title = this.newTitle;  // Use '!' to assure TypeScript that album is not null
      },
      error: (err) => {
        console.error("Failed to update album:", err);
      }
    });
  }
  

}