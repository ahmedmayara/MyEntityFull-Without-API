import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Label } from '../model/label.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums : Album[];
  album!: Album;
  albumsSearch! : Album[];

  labels!: Label[];

  constructor() {

    this.labels = [
      {idLabel: 1, labelName: "Def Jam", labelFounder: "Russell Simmons", labelCountry: "USA"},
      {idLabel: 2, labelName: "OVO", labelFounder: "Drake", labelCountry: "Canada"},
      {idLabel: 3, labelName: "XO Records", labelFounder: "The Weeknd", labelCountry: "Canada"},
      {idLabel: 4, labelName: "Roc Nation", labelFounder: "Jay-Z", labelCountry: "USA"},
      {idLabel: 5, labelName: "Republic Records", labelFounder: "Ariana Grande", labelCountry: "USA"},
      {idLabel: 6, labelName: "Boys Don't Cry", labelFounder: "Frank Ocean", labelCountry: "USA"},
    ];

    this.albums = [
      {
        id: 1,
        title: 'The Life Of Pablo',
        artist: 'Kanye West',
        releaseDate: new Date('2016-02-14'),
        genre: 'Hip-Hop',
        label: this.labels[0]
      },

      {
        id: 2,
        title: 'Blonde',
        artist: 'Frank Ocean',
        releaseDate: new Date('2016-08-20'),
        genre: 'R&B',
        label: this.labels[5]
      },

      {
        id: 3,
        title: 'After Hours',
        artist: 'The Weeknd',
        releaseDate: new Date('2020-03-20'),
        genre: 'R&B',
        label: this.labels[2]
      },

      {
        id: 4,
        title: 'The Blueprint',
        artist: 'Jay-Z',
        releaseDate: new Date('2001-09-11'),
        genre: 'Hip-Hop',
        label: this.labels[3]
      },

      {
        id: 5,
        title: 'The College Dropout',
        artist: 'Kanye West',
        releaseDate: new Date('2004-02-10'),
        genre: 'Hip-Hop',
        label: this.labels[0]
      }
    ];
    }

    AlbumList():Album[] {
      return this.albums;
    }

    AddAlbum(al:Album) {
      this.albums.push(al);
    }

    deleteAlbum(a: Album) {
      const index = this.albums.indexOf(a, 0);
      if (index > -1) {
        this.albums.splice(index, 1);
      }
    }

    getAlbumById(id: number): Album {
      this.album = this.albums.find(a => a.id == id)!;
      return this.album;
    }

    updateAlbum(a: Album) {
      this.deleteAlbum(a);
      this.AddAlbum(a);
    }

    labelsList(): Label[] {
      return this.labels;
    }

    getLabelById(id: number): Label {
      return this.labels.find(l => l.idLabel == id)!;
    }

    searchByLabel (idLab : number ) : Album[] {
      this.albumsSearch = [];

      this.albums.forEach ((cur, index) => {
        if (idLab == cur.label.idLabel) {
          this.albumsSearch.push(cur);
        }
      });

      return this.albumsSearch;
    }

    addLabel(l: Label) {
      this.labels.push(l);
    }

    labelUpdated(l: Label) {
      console.log("AlbumService.labelUpdated()", l);
      this.addLabel(l);
      this.labelsList();
    }
  }
