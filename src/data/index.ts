import { Tile, tileRotates, tileSize } from './types'

export const tileRotate: tileRotates = [60, 120, 180, 240, 300, 360]

export const circuitSize: tileSize = [14, 15, 16, 17]

export const tiles: Tile = [
  { id: '102a', lanes: 3, straight: true },
  { id: '102b', lanes: 2, straight: true },
  { id: '103a', lanes: 3, straight: true },
  { id: '103a1', lanes: 3, straight: true },
  { id: '103a2', lanes: 3, straight: true },
  { id: '103b', lanes: 2, straight: true },
  { id: '103b1', lanes: 2, straight: true },
  { id: '103b2', lanes: 2, straight: true },
  { id: '104a', lanes: 3, straight: true },
  { id: '104a1', lanes: 3, straight: true },
  { id: '104a2', lanes: 3, straight: true },
  { id: '104b', lanes: 2, straight: true },
  { id: '104b1', lanes: 2, straight: true },
  { id: '104b2', lanes: 2, straight: true },
  { id: '105a', lanes: 3, straight: true, curve: { corner: false } },
  { id: '105a1', lanes: 3, straight: true, curve: { corner: false } },
  { id: '105b', lanes: 2, straight: true, curve: { corner: false } },
  { id: '105b1', lanes: 2, straight: true, curve: { corner: false } },
  { id: '106a', lanes: 3, straight: true, curve: { corner: false } },
  { id: '106a1', lanes: 3, straight: true, curve: { corner: false } },
  { id: '106b', lanes: 2, straight: true, curve: { corner: false } },
  { id: '106b1', lanes: 2, straight: true, curve: { corner: false } },
  { id: '107a', lanes: 2, straight: false, curve: { corner: true, number: 1 } },
  {
    id: '107a1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 1 },
  },
  { id: '107b', lanes: 2, straight: false, curve: { corner: true, number: 1 } },
  {
    id: '107b1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 1 },
  },
  { id: '108a', lanes: 3, straight: false, curve: { corner: true, number: 1 } },
  { id: '108b', lanes: 2, straight: false, curve: { corner: true, number: 1 } },
  { id: '109a', lanes: 3, straight: false, curve: { corner: true, number: 1 } },
  { id: '109b', lanes: 3, straight: false, curve: { corner: true, number: 1 } },
  { id: '110a', lanes: 3, straight: false, curve: { corner: true, number: 1 } },
  { id: '110b', lanes: 2, straight: false, curve: { corner: true, number: 1 } },
  { id: '111a', lanes: 2, straight: false, curve: { corner: true, number: 2 } },
  {
    id: '111a1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 2 },
  },
  { id: '111b', lanes: 2, straight: false, curve: { corner: true, number: 2 } },
  {
    id: '111b1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 2 },
  },
  { id: '112a', lanes: 3, straight: false, curve: { corner: true, number: 2 } },
  {
    id: '112a1',
    lanes: 3,
    straight: false,
    curve: { corner: true, number: 2 },
  },
  { id: '112b', lanes: 2, straight: false, curve: { corner: true, number: 2 } },
  {
    id: '112b1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 2 },
  },
  { id: '113a', lanes: 2, straight: false, curve: { corner: true, number: 2 } },
  { id: '113b', lanes: 2, straight: false, curve: { corner: true, number: 2 } },
  { id: '114a', lanes: 3, straight: false, curve: { corner: true, number: 2 } },
  { id: '114b', lanes: 2, straight: false, curve: { corner: true, number: 2 } },
  { id: '115a', lanes: 3, straight: false, curve: { corner: true, number: 3 } },
  {
    id: '115a1',
    lanes: 3,
    straight: false,
    curve: { corner: true, number: 3 },
  },
  { id: '115b', lanes: 2, straight: false, curve: { corner: true, number: 3 } },
  {
    id: '115b1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 3 },
  },
  { id: '116a', lanes: 3, straight: false, curve: { corner: true, number: 3 } },
  {
    id: '116a1',
    lanes: 3,
    straight: false,
    curve: { corner: true, number: 3 },
  },
  { id: '116b', lanes: 2, straight: false, curve: { corner: true, number: 3 } },
  {
    id: '116b1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 3 },
  },
  { id: '117a', lanes: 3, straight: false, curve: { corner: true, number: 4 } },
  {
    id: '117a1',
    lanes: 3,
    straight: false,
    curve: { corner: true, number: 4 },
  },
  { id: '117b', lanes: 2, straight: false, curve: { corner: true, number: 4 } },
  {
    id: '117b1',
    lanes: 2,
    straight: false,
    curve: { corner: true, number: 4 },
  },
  { id: '118a', lanes: 3, straight: false, curve: { corner: true, number: 5 } },
  { id: '118b', lanes: 2, straight: false, curve: { corner: true, number: 5 } },
  { id: '119a', lanes: 3, straight: true },
  { id: '119b', lanes: 3, straight: false, curve: { corner: true, number: 3 } },
  { id: '120a', lanes: 3, straight: true },
  { id: '120b', lanes: 3, straight: false, curve: { corner: true, number: 3 } },
]
