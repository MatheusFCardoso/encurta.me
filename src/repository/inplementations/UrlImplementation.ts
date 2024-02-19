import { Url, UrlInput } from '../../models/Url';
import IUrl from '../IUrl';
import MongoDBContexts from '../../models/MongoDBContext';

class UrlImplementation implements IUrl {
  private _context: MongoDBContexts;

  constructor() {
    this._context = new MongoDBContexts();
  }

  async Store(urlBody: string): Promise<Url | null> {
    try {
      const url: UrlInput = {
        urlOriginal: urlBody,
        urlShort: this.generateCode(),
        access: 0,
      };
      await this._context.UrlModel.create(url);
      const newUrl: Url | null = await this._context.UrlModel.findOne({
        urlShort: url.urlShort,
      });
      return newUrl;

    } catch (error) {
      console.error('Erro ao armazenar a URL:', error);
      throw error;
    }
  }

  async Index(): Promise<Url[]> {
    try {
      const urls: Url[] = await this._context.UrlModel.find();
      return urls;
    } catch (error) {
      console.error('Erro ao obter a lista de URLs:', error);
      throw error;
    }
  }

  async Show(urlShort: String): Promise<Url | null> {
    try {
      const url: Url | null = await this._context.UrlModel.findOne({
        urlShort: urlShort,
      });
      return url;
    } catch (error) {
      throw error;
    }
  }

  generateCode(): string {
    const chars: string[] =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        '',
      );
    let result: string = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex: number = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }
}

export default new UrlImplementation();
