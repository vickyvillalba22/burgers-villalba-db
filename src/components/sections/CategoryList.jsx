'use client'

import React from 'react'
import { Icon } from '@iconify/react'

const CategoryList = ({ categories = [] }) => {
  const getIcon = (name) => {
    const n = name.toLowerCase()
    if (n.includes('burger')) return 'hugeicons:burger-01'
    if (n.includes('chicken') || n.includes('pollo')) return 'hugeicons:meat'
    if (n.includes('papas') || n.includes('fries') || n.includes('side')) return 'hugeicons:french-fries'
    if (n.includes('bebida') || n.includes('drink')) return 'hugeicons:glass-01'
    if (n.includes('postre') || n.includes('dessert')) return 'hugeicons:ice-cream-01'
    return 'hugeicons:grid-view'
  }

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0 mt-8">
      {/* "All Items" static category */}
      <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
        <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all bg-orange-500 text-white shadow-lg shadow-orange-500/30">
          <Icon icon="hugeicons:grid-view" className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-[10px] font-bold text-slate-900">
          All Items
        </span>
      </div>

      {categories.map((cat) => (
        <div key={cat._id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all bg-white text-slate-400 shadow-sm hover:shadow-md">
            <Icon 
              icon={getIcon(cat.name)} 
              className="w-8 h-8 group-hover:scale-110 transition-transform" 
            />
          </div>
          <span className="text-[10px] font-bold text-slate-500">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
