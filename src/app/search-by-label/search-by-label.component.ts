import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Label } from '../model/label.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-search-by-label',
  templateUrl: './search-by-label.component.html',
  styleUrls: ['./search-by-label.component.css']
})
export class SearchByLabelComponent implements OnInit {

  albums!: Album[];
  labels!: Label[];
  idLabel!: number;

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.labels = this.albumService.labelsList();
    this.albums = [];
  }

  deleteAlbum(a: Album) {
    let conf = confirm("Are you sure you want to delete this album?");
    if (conf) {
      this.albumService.deleteAlbum(a);
    }
  }

  onChange() {
    this.albums = this.albumService.searchByLabel(this.idLabel);
  }

}
