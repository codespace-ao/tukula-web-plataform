"use client"

import { CheckSquare, Eye, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const filterOptions = [
  { label: 'Ordem Alfabética A-Z', value: 'alphabetical' },
  { label: 'Ordem Alfabética Z-A', value: 'alphabetical-desc' },
  { label: 'Preço: Menor para Maior', value: 'price-asc' },
  { label: 'Preço: Maior para Menor', value: 'price-desc' },
];

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(filterOptions[0]);

  return (
    <div className="bg-white flex items-center justify-between border-none mb-4">
      <div className="flex space-x-4">
        <p className='font-focus font-semibold text-2xl text-primary'>Reduza o desperdício</p>
      </div>
      <div className="relative flex items-center gap-x-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-700 border border-zinc-200 rounded-xl px-4 py-1.5 hover:bg-gray-200 transition-colors"
        >
          <span>{selected.label}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-gray-700 border border-zinc-200 rounded-xl px-4 py-1.5 hover:bg-gray-200 transition-colors"
        >
          <span>Categoria</span>
          <ChevronDown className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};

export default FilterBar;