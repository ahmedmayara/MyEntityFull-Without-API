import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { Label } from '../model/label.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  newAlbum = new Album();

  labels!: Label[];
  newIdLabel!: number;
  newLabel!: Label;

  addAlbum() {
    this.newLabel = this.albumService.getLabelById(this.newIdLabel);
    this.newAlbum.label = this.newLabel;
    this.albumService.AddAlbum(this.newAlbum);
    this.router.navigate(['albums']);
  }

  constructor(private albumService: AlbumService, private router : Router) {}

  ngOnInit(): void {
    this.labels = this.albumService.labelsList();
  }

}
