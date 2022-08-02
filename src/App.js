import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const last = people.length - 1;
  function nextPerson() {
    let newValue = index + 1;
    if (newValue > last) {
      newValue = 0;
    }
    setIndex(newValue);
  }
  function prevPerson() {
    let newValue = index - 1;
    if (newValue < 0) {
      newValue = last;
    }
    setIndex(newValue);
  }
  useEffect(() => {
    let setter = setInterval(nextPerson, 3000);
    return () => clearInterval(setter);
  }, [index]);
  return (
    <>
      <section className='title'>
        <h2>
          <span>/</span> review
        </h2>
        <div className='section-center'>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight />
              </article>
            );
          })}

          <button onClick={prevPerson} className='prev'>
            <FiChevronLeft />
          </button>
          <button onClick={nextPerson} className='next'>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
