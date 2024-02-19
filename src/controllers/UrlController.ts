import { Request, Response } from 'express';
import UrlImplementation from '../repository/inplementations/UrlImplementation';
import { Url } from '../models/Url';

class UrlController {
  async index(req: Request, res: Response) {
    res.render('index');
    // return res.send(await UrlImplementation.Index());
  }

  async show(req: Request, res: Response) {
    const urlShort = req.params.id;
    const url: Url | null = await UrlImplementation.Show(urlShort);
    if (url) {
      const urlOriginal: string = url.urlOriginal;
      return res.redirect(urlOriginal);
    } else {
      res.render('notFound');
    }
  }

  async store(req: Request, res: Response) {
    const newShortUrl: Url | null = await UrlImplementation.Store(req.body.url);
    return res.render('newShortUrl', { newShortUrl });
  }
}
export default new UrlController();
