import { HeroList } from '../components'

export const Bebidas = () => {
  return (
    <div className="contain-sections">
    <div className="containImageSection sectionDrinks">
      <h2 className="titleSection">Bebidas</h2>
    </div>

    <section className="section-list-snacks">
      <HeroList
        category={'bebidas'}
      />
    </section>
    
</div>
  )
}

