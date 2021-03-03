export interface OverlayImage {
  imageUrl: string;
  /** Text to place in HTML `alt` attribute */
  imageAltText: string;
  /** Direction of the arrows. This determines the overlay style. */
  direction: 'left' | 'right';
}