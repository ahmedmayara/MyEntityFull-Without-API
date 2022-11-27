import { Component, OnInit } from '@angular/core';
import { Label } from '../model/label.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list-labels',
  templateUrl: './list-labels.component.html',
  styleUrls: ['./list-labels.component.css']
})
export class ListLabelsComponent implements OnInit {

  labels!: Label[];

  updatedLabel : Label = {idLabel: 0, labelName: '', labelFounder: '', labelCountry: ''};

  ajout: boolean = true;

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.labels = this.albumService.labelsList();
  }

  labelUpdated(label : Label) {
    this.albumService.labelUpdated(label);
  }

  updateLab(label : Label) {
    this.updatedLabel = label;
    this.ajout = false;
  }

}
