import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

@Injectable({ providedIn: 'root' })
export class RssService {
  constructor(private http: HttpClient) {}

  loadBaua(limit = 10): Observable<RssItem[]> {
    return this.http
      .get<RssItem[]>('/api/rss/baua')
      .pipe(map((items: RssItem[]) => items.slice(0, limit)));
  }
}
