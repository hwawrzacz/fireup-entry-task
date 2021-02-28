export interface CarouselSlide {
  /** Path to image which will be shown when this slide is visible */
  imageUrl: string;
  /** Text that will be visible at the top of the slide */
  caption: string;
  /** Class which when applied will set the caption text color */
  captionColorClass: string;
  /** Text that will be displayed as the label of the button corresponding to this slide */
  buttonLabel: string;
  /** Icon name that will be displayed as the icon next to (or above if on tablet) the label of the button corresponding to this slide */
  buttonIcon: string;
  /** Class which when applied will set the button background color */
  buttonColorClass: string;
}