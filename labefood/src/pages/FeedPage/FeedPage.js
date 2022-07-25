import { Container, Search, Categories } from "./Styles"
import search from '../../assets/search.svg'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FeedCards from "../../components/FeedCards/FeedCards";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useState } from "react";


const FeedPage = () => {

  useProtectedPage()

  const { form, onChange, cleanFields } = useForm({
    search: ''
  })
  const [ filter, setFilter ] = useState('')
  const categories = ['Árabe', 'Asiática', 'Hamburguer', 'Italiana', 'Sorvetes', 'Carnes', 'Baiana', 'Petiscos', 'Mexicana']
  const [changeColor, setChangeColor] = useState(null)

  const onCategory = (category, index) => {
    cleanFields()
    setFilter(category)
    setChangeColor(index + 1)
  }

  const onFilter = () => {
    setFilter('')
    setChangeColor(null)
  }

  return (
    <Container>
      <Header subTitle={'FutureEats'}/>
      <Search>
        <button>
          <img src={search} alt="Ícone de busca" />
        </button>
        <input 
          onClick={onFilter}
          type="text" 
          placeholder="Restaurante" 
          value={form.search}
          name='search'
          onChange={onChange}
        />
      </Search>
      <Categories idx={changeColor}>
        {categories.map((category, i) => (
          <p key={i} onClick={() => onCategory(category, i)}>{category}</p>
        ))}
      </Categories>
      <FeedCards text={form.search} filter={filter}/>
      <Footer />
    </Container>
  )
}
  
export default FeedPage