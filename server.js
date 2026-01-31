import express from 'express';
import Parser from 'rss-parser';
import fetch from 'node-fetch';

const app = express();

const parser = new Parser({
  customFetch: (url) =>
    fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (RSS Aggregator)',
      },
    }),
});

let cache = {
  data: null,
  timestamp: 0,
};

const CACHE_TTL = 15 * 60 * 1000; // 15 Minuten

const BAUA_RSS_URL =
  'https://www.baua.de/DE/Angebote/Aktuelles/RSS/BAuA-Aktuell-RSS-Feed.xml?nn=694255ec85ec843c18710e4c';

app.get('/api/rss/baua', async (req, res) => {
  try {
    const now = Date.now();

    if (cache.data && now - cache.timestamp < CACHE_TTL) {
      return res.json(cache.data);
    }

    const feed = await parser.parseURL(BAUA_RSS_URL);

    const items = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      description: item.contentSnippet || '',
      pubDate: item.pubDate,
    }));

    cache = {
      data: items,
      timestamp: now,
    };

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'BAuA RSS konnte nicht geladen werden',
    });
  }
});

app.listen(3000, () => {
  console.log('RSS-Proxy läuft auf http://localhost:3000');
});
