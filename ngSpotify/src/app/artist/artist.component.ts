import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Artist } from '../artist';
import { Album } from '../album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifiyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe(id => {
        this.spotifiyService.getArtist(id)
          .subscribe(artist => this.artist = artist);
        this.spotifiyService.getAlbums(id)
          .subscribe(albums => this.albums = albums.items);
      });
  }

}
