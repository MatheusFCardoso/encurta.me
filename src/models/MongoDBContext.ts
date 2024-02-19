import mongoose from 'mongoose';
import { Url } from './Url';

// const UrlSchema = new mongoose.Schema<Url>({
//   urlOriginal: { type: String, required: true },
//   urlShort: { type: String, required: true },
//   access: { type: Number, default: 0 },
// });

// const UrlModel = mongoose.model('Url', UrlSchema);

// export default UrlModel;

class MongoDBContexts {
  UrlModel;

  constructor() {
    this.UrlModel = mongoose.model(
      'urls',
      new mongoose.Schema<Url>({
        urlOriginal: { type: String, required: true },
        urlShort: { type: String, required: true },
        access: { type: Number, default: 0 },
      }),
    );
  }
}

export default MongoDBContexts;;
