import './App.css'
import RegistrationForm from './RegistrationForm'

function App() {
  return (
    <>
       <header></header>

       <main>
          <aside>
            <input type="text" className='search' id='search' name='search' placeholder='Search' />
          </aside>

          <section>
            <RegistrationForm />
            <div className="center" id="hiddenSection">
            <p id="hiddenParagraph"></p>
            </div>

          </section>
       </main>
    </>
  )
}

export default App
