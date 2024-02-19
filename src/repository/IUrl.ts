import { Url, UrlInput } from '../models/Url';

interface IUrl {
  Store(urlBody: String): Promise<Url | null>;
  Index(): Promise<Url[]>;
  Show(urlShort: String): Promise<Url | null>;
  generateCode(): String;
}

export default IUrl;
