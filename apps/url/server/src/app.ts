import express from 'express';
import cors from 'cors';

/**
 * * Stateful dependencies to inject at root.
 */
type MainDependencies = {
  shortenUrl: (original: string) => Promise<string>;
  lookupUrl: (shortId: number) => Promise<string>;
};

export async function createApp({ shortenUrl, lookupUrl }: MainDependencies) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.post('/api/shorten', async (req, res) => {
    const original = req.body.original;
    if (!original.startsWith("http://") && !original.startsWith("https://") && !original.startsWith("www.")) {
      res.status(400).send({
        error: "Make sure the URL to shorten is a link (starts with 'http://' or 'https://')",
      });
    } else {
      const short = await shortenUrl(original);
      res.status(201).send({
        short: short,
        original: original,
      });
    }
  });

  app.get('/s/:id', async (req, res) => {
    const id = Number(req.params.id);
    const original = await lookupUrl(id);
    res.redirect(original);
  });
  return app;
}