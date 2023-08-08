export interface Payload {
  data: {
    results: CharacterPaylod[];
    offset: string;
    total: string;
  };
  attributionText: string;
}

export interface AppContextProps {
  onSearchHero(textSearch: string): void;
  onPaginate(page: number): void;
  attributionText: string;
  characters: CharacterPaylod[];
  pageInfo: { page: string; total: string };
  loading: boolean;
}

export interface CharacterPaylod {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics?: Details;
}

export interface CharacterPaylodUnique extends CharacterPaylod {
  comics?: Details;
  modified?: string;
  series: {
    available: number;
  };
}

export interface Thumbnail {
  path: string;
  extension: string;
}

interface Details {
  items: Item[];
  available: number;
}

interface Item {
  name: string;
  type: string;
}

export interface Comics {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Details;
  modified: string;
  series?: {
    available: number;
  };
}
