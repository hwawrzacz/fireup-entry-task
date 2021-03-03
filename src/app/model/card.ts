export interface Card {
  imageUrl: string;
  imageAltText: string;
  caption?: string;
  imageStyle: 'circle' | 'polygon';
}