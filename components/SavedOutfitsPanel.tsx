/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { SavedOutfit } from '../types';
import { Trash2Icon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

interface SavedOutfitsPanelProps {
  savedOutfits: SavedOutfit[];
  onLoadOutfit: (outfit: SavedOutfit) => void;
  onDeleteOutfit: (outfitId: number) => void;
  isLoading: boolean;
}

const SavedOutfitsPanel: React.FC<SavedOutfitsPanelProps> = ({ savedOutfits, onLoadOutfit, onDeleteOutfit, isLoading }) => {
  return (
    <div className="pt-6 border-t border-gray-400/50">
      <h2 className="text-xl font-serif tracking-wider text-gray-800 mb-3">Saved Outfits</h2>
      {savedOutfits.length === 0 ? (
        <p className="text-center text-sm text-gray-500 pt-4">Your saved outfits will appear here. Style an outfit and click 'Save' to add it.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <AnimatePresence>
            {savedOutfits.map((outfit) => (
              <motion.div
                key={outfit.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group aspect-[4/5] border rounded-lg overflow-hidden"
              >
                <img src={outfit.previewImageUrl} alt={outfit.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-2">
                  <p className="text-white text-xs font-bold truncate">{outfit.name}</p>
                </div>
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => onLoadOutfit(outfit)}
                      disabled={isLoading}
                      className="w-3/4 bg-white/90 text-gray-900 text-sm font-semibold py-2 px-3 rounded-md transition-all duration-200 ease-in-out hover:bg-white active:scale-95 disabled:opacity-50"
                    >
                      Load Outfit
                    </button>
                    <button
                      onClick={() => onDeleteOutfit(outfit.id)}
                      className="absolute top-1 right-1 p-1.5 rounded-full bg-black/40 text-white hover:bg-red-600/80 transition-colors"
                      aria-label={`Delete ${outfit.name}`}
                    >
                      <Trash2Icon className="w-4 h-4" />
                    </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default SavedOutfitsPanel;