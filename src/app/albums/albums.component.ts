import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Album[];

  constructor(private albumService: AlbumService, public authService : AuthService) {
    this.albums = albumService.AlbumList();
  }

  ngOnInit(): void {
  }

  deleteAlbum(a: Album) {
    let conf = confirm("Are you sure you want to delete this album?");
    if (conf) {
      this.albumService.deleteAlbum(a);
    }
  }
    
}
