import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify service listo')
   }

   getQuery( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAYPjgimP7RaukJ7S2Qe0W8KF8yY8MnwXCuuzIgyD5lQcfAmQrPPMeBWWVjFe3HT85RriFYBp_gc-AOL40lY6zCnDLtttzBVMf3gFVq-GMNLfyyaHO0nxG5rBjTlYWg5gem'
    });

    return this.http.get(url, { headers });
   }

   getNewReleases() {
     return this.getQuery('browse/new-releases' )
                .pipe( map( (data: any) => data['albums'].items))      
   }
    
   getArtistas( termino: string ) {
     return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
                .pipe( map( (data: any) => data['artists'].items ) )       
   }

   getArtista( id: string ) {
    return this.getQuery( `artists/${id}` )
               //.pipe( map( (data: any) => data['artists'].items ) )       
  }

  getTopTracks( id: string ) {
    return this.getQuery( `artists/${id}/top-tracks?market=ES` )
               .pipe( map( (data: any) => data['tracks'] ) );       
  }
}

