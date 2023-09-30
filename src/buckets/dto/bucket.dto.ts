import { ContentType } from '../schema/bucket.schema';

export class BucketDTO {
  name: string;
  description: string;
  type: ContentType;
}
