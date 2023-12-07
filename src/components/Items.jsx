import React from 'react'
import Item from './Item'

export default function Items({items, onAdd, onShowItem}) {
  return (
    <main>
        {items.map(item => (
            <Item 
                item={item}
                key={item.id}
                onAdd={onAdd}
                onShowItem={onShowItem}
            />
        ))}
    </main>
  )
}
