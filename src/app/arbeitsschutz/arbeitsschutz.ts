import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { RssService, RssItem } from '../service/rss';
import { signal } from '@angular/core';

type TabKey = 'rss' | 'news' | 'settings';

@Component({
  standalone: true,
  selector: 'app-arbeitsschutz',
  imports: [CommonModule],
  templateUrl: './arbeitsschutz.html',
})
export class Arbeitsschutz {
  private rss = inject(RssService);

  readonly items = toSignal(this.rss.loadBaua(), { initialValue: [] as RssItem[] });

  activeTab = signal<TabKey>('rss');

  setTab(tab: TabKey) {
    this.activeTab.set(tab);
  }
}
