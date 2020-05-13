import { Author } from './author';
import { List } from './list';

export class Story {
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // Explicitly prepend the preamble of the literotica stories url path.
      if (f === 'url') {
        this.url = `https://literotica.com/s/${fields[f]}`;
      } else {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  }
}

export interface Story {
  [prop: string]: any;

  id: any;
  title: string;
  content: any;
  description: string;
  rating: number;
  myrating: number;
  category: string;
  categoryID: number;
  lang: string;
  tags: string[];
  series: number;
  timestamp: string;
  author: Author;
  url: string;
  length: number;
  currentpage: number;
  viewcount: number;
  ishot: boolean;
  isnew: boolean;
  iswriterspick: boolean;
  iscontestwinner: boolean;
  commentsenabled: boolean;
  ratingenabled: boolean;
  cached: boolean;
  downloaded: boolean;
  downloadedtimestamp: Date | string;
  lists: List[];
  comments: {
    user: string;
    text: string;
    timestamp: string;
  }[];
}
