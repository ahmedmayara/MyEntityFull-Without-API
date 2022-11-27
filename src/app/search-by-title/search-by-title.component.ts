import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Label } from '../model/label.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-search-by-title',
  templateUrl: './search-by-title.component.html',
  styleUrls: ['./search-by-title.component.css']
})
export class SearchByTitleComponent implements OnInit {

  albums!: Album[];
  allAlbums!: Album[];
  labels!: Label[];
  searchTerm!: string;

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albums = this.albumService.AlbumList();
    this.allAlbums = this.albums;
  }

  deleteAlbum(a: Album) {
    let conf = confirm("Are you sure you want to delete this album?");
    if (conf) {
      this.albumService.deleteAlbum(a);
    }
  }

  onKeyUp(filterText : string) {
    this.albums = this.allAlbums.filter(a => a.title.toLowerCase().includes(filterText.toLowerCase()));
  }

}
