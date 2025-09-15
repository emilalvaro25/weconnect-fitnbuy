/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { WardrobeItem } from './types';

// Default wardrobe items hosted for easy access
export const defaultWardrobe: WardrobeItem[] = [
  {
    id: 'gemini-sweat',
    name: 'Gemini Sweat',
    url: 'https://raw.githubusercontent.com/ammaarreshi/app-images/refs/heads/main/gemini-sweat-2.png',
  },
  {
    id: 'gemini-tee',
    name: 'Gemini Tee',
    url: 'https://raw.githubusercontent.com/ammaarreshi/app-images/refs/heads/main/Gemini-tee.png',
  }
];

export const defaultAccessories: WardrobeItem[] = [
  {
    id: 'beanie-hat',
    name: 'Beanie Hat',
    url: 'https://storage.googleapis.com/gemini-95-icons/hat.png',
  },
  {
    id: 'sunglasses',
    name: 'Sunglasses',
    url: 'https://storage.googleapis.com/gemini-95-icons/sunglasses.png',
  },
  {
    id: 'tote-bag',
    name: 'Tote Bag',
    url: 'https://storage.googleapis.com/gemini-95-icons/bag.png',
  },
];
