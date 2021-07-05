import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify service listo')
   }

   getNewReleases() {
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQBWwBiPkAQbcX1P0c9tB5cgr2Nhhr5OsObTLTludcx5Ha53tr6U5ScXD0ACpDCPZNjOxBT619VZtSK5t8XFgObb5BM6Qj0J5Inm6IHIulQalCpJq8kPOviK7PJ7wGWjHdeH'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });           
   }
    
   getArtista( termino: string) {
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQBWwBiPkAQbcX1P0c9tB5cgr2Nhhr5OsObTLTludcx5Ha53tr6U5ScXD0ACpDCPZNjOxBT619VZtSK5t8XFgObb5BM6Qj0J5Inm6IHIulQalCpJq8kPOviK7PJ7wGWjHdeH'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });    
   }
}
