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

   getNewReleases() {
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQB5QyDtdeKoS1H2-_VHP43a3UvchTCa-1ral1dKblpb36sLP3sLb0M37U80tnLzGfZKvISWQJuOQCUUOQ73swl64TgNerKUZH2FWrnVqw5R1PDWud7WJgwh006s6p3W-XXE'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                .pipe( map( (data: any) => data['albums'].items))           
   }
    
   getArtista( termino: string) {
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQBWwBiPkAQbcX1P0c9tB5cgr2Nhhr5OsObTLTludcx5Ha53tr6U5ScXD0ACpDCPZNjOxBT619VZtSK5t8XFgObb5BM6Qj0J5Inm6IHIulQalCpJq8kPOviK7PJ7wGWjHdeH'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
                .pipe( map( (data: any) => data['artists'].items ) )       
   }
}
