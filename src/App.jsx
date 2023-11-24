import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="booking-page">
      <div className="overlap">
        <img className="rectangle" src="img/rectangle-37.png" alt="Rectangle 37" />
        <div className="div"></div>
        <img className="img" src="img/rectangle-29.svg" alt="Rectangle 29" />
        <div className="rectangle-2"></div>
        <img className="rectangle-3" src="img/rectangle-30.svg" alt="Rectangle 30" />
        <div className="rectangle-4"></div>
        <div className="rectangle-5"></div>
        <div className="rectangle-6"></div>
        <img className="rectangle-7" src="img/rectangle-33.svg" alt="Rectangle 33" />
        <div className="text-wrapper">Food Recipes</div>
        <div className="text-wrapper-2">Reserve a Table</div>
        <div className="text-wrapper-3">VIEW MORE</div>
        <div className="text-wrapper-4">VIEW MORE</div>
        <div className="rectangle-8"></div>
        <div className="rectangle-9"></div>
        <div className="rectangle-10"></div>
        <div className="frame">
          <button>
            <label htmlFor="name">Persons</label>
            <input type="text" id="name" name="name" required />
            <div className="draft-arrows">
              <img className="union" src="img/union.svg" alt="Union" /> 
              <img className="vector" src="img/vector-3.svg" alt="Vector 3" />
            </div>
          </button>
        </div>
        <div className="frame-2">
          <div className="form-group">
            <label htmlFor="tipe_meja">Tipe Meja</label>
            <select name="tipe_meja" id="tipe_meja" required>
              <option value="reguler">Reguler</option>
              <option value="vip">VIP</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>
        </div>
        <div className="frame-3">
          <button>                    
            <input type="date" id="date" name="date" required />
          </button>
          <div className="draft-arrows">
            <img className="union-3" src="img/union-3.svg" alt="Union 3" /> 
            <img className="vector" src="img/vector-3-2.svg" alt="Vector 3-2" />
          </div>
        </div>
        <div className="frame-4">
          <button>
            <label htmlFor="time">Waktu:</label>
            <input type="time" id="time" name="time" required />
            <div className="draft-arrows">
              <img className="union-4" src="img/union-2.svg" alt="Union 2" /> 
              <img className="vector" src="img/image.svg" alt="Image" />
            </div>
          </button>
        </div>
        <div className="group">
        <button type="submit">Reservasi</button>
          <div className="overlap-group">
            <div className="rectangle-11"></div>
            <div className="rectangle-12"></div>
            <div className="book-now">BOOK NOW</div>
          </div>
        </div>
        <img className="vuesax-outline-book" src="img/book.svg" alt="Book" />
        <div className="text-wrapper-7">Cooking is about passion</div>
      </div>
      <div className="rectangle-13"></div>
    </div>
  )
}

export default App
