import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Chore} from './chore.model';

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  choreRoute = '/chores';

  constructor(
    private readonly http: HttpClient,
  ) { }

  async saveChores(chores: Array<Chore>) {
    const savedChores = await this.http.post<Array<Chore>>(
      `${environment.baseApiUrl}${this.choreRoute}`,
      chores,
    ).toPromise();
    return savedChores;
  }

  async getChores() {
    const chores = await this.http.get<Array<Chore>>(
      `${environment.baseApiUrl}${this.choreRoute}`,
    ).toPromise();
    return chores;
  }

}
