import mongoose, { Document } from 'mongoose';

interface Url extends Document {
  urlOriginal: string;
  urlShort: string;
  access?: number;
}

interface UrlInput extends Omit<Url, keyof Document> {}

export { Url , UrlInput };
