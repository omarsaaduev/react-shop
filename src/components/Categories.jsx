import React, { useState } from 'react'

const data = [
    {
        key: 'all',
        name: 'Все'
    },
    {
        key: 'chairs',
        name: 'Стулья'
    },
    {
        key: 'tables',
        name: 'Столы'
    },
    {
        key: 'sofa',
        name: 'Диваны'
    },
    {
        key: 'lamp',
        name: 'Лампы'
    },
    {
        key: 'pianino',
        name: 'Пианино'
    },
    {
        key: 'armchairs',
        name: 'Кресла'
    }
]

export default function Categories({onCategory}) {
    const [categories, setCategories] = useState(data)
  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => onCategory(el.key)}>{el.name}</div>
      ))}
    </div>
  )
}
