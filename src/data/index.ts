export type Tracks = {
  trackId: string;
  imageId: string;
  arrange?: {
    left?: number;
    display?: string;
  };
}[];

export const tracks: Tracks = [
  { trackId: '101a', imageId: 'urlhere' },
  { trackId: '101b', imageId: 'urlhere' },
  { trackId: '102a', imageId: 'urlhere' },
  { trackId: '102b', imageId: 'urlhere' },
  { trackId: '103a', imageId: 'urlhere' },
  { trackId: '103b', imageId: 'urlhere' },
];
