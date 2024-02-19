import mongoose, { Document } from 'mongoose';

interface IUrl extends Document {
  urlOriginal: string;
  urlShort: string;
  access?: number;
}

interface IUrlInput extends Omit<IUrl, keyof Document> {}

export { IUrl , IUrlInput };
