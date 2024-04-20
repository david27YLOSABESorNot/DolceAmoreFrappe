import { HeroList } from "../components"




export const Snacks = () => {
  return (
    <div className="contain-sections">
        <div className="containImageSection sectionSnack">
          <h2 className="titleSection">Snacks</h2>
        </div>

        <section className="section-list-snacks">
          <HeroList
            category={'snacks'}
          />
        </section>
        
    </div>
  )
}
