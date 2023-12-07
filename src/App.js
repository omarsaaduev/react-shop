import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

const data = [
  {
    id: 1,
    title: 'Стул серый',
    img: 'chairs.webp',
    desc: 'lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'chairs',
    price: '49.99'
  },
  {
    id: 2,
    title: 'Стол',
    img: 'table.webp',
    desc: 'lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'tables',
    price: '149.00'
  },
  {
    id: 3,
    title: 'Диван',
    img: 'sofa.webp',
    desc: 'lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'sofa',
    price: '449.99'
  },
  {
    id: 4,
    title: 'Лампа',
    img: 'lamp.webp',
    desc: 'lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'lamp',
    price: '89.00'
  },
  {
    id: 5,
    title: 'Пианино',
    img: 'pianino.webp',
    desc: 'lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'pianino',
    price: '659.00'
  },
  {
    id: 6,
    title: 'Кресло',
    img: 'armchair.webp',
    desc: 'lorem ipsum dolor sit amet, consectetur adipisicing',
    category: 'armchairs',
    price: '129.99'
  }
]

function App() {
  const [items, setItems] = useState(data)
  const [orders, setOrders] = useState([])
  const [currentItems, setCurrentItems] = useState(items)
  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState([])
  
  function addToOrder (item) {

    let isInArray = false
    orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      setOrders(prev => [...prev, item])
    } 
  }

  function deleteToOrder(id) {
    setOrders(orders.filter(el => el.id !== id))
  }

  function chooseCategory(category) {
    if(category === 'all'){
      setCurrentItems(items)
      return
    }
    setCurrentItems(items.filter(el => el.category === category))
  }

  function onShowItem (item) {
    setFullItem(item)
    setShowFullItem(!showFullItem)
  }
  return (
    <div className="wrapper">
      <Header orders={orders} onDelete ={deleteToOrder}/>
      <Categories onCategory = {chooseCategory}/>
      <Items items={currentItems} onAdd = {addToOrder} onShowItem = {onShowItem}/>
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/> }
      <Footer/>
    </div>
  );
}

export default App;
