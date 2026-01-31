import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RssService, RssItem } from '../service/rss';

@Component({
  standalone: true,
  selector: 'app-arbeitsschutz',
  imports: [CommonModule],
  templateUrl: './arbeitsschutz.html',
})
export class Arbeitsschutz {
  private rss = inject(RssService);

  readonly items = toSignal(this.rss.loadBaua(), { initialValue: [] as RssItem[] });
}
