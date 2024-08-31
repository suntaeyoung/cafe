import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './img/cafe-bg.png'
import coffeeImages from './img/menu/menu.js';
import { useState } from 'react';
import data from './data.js';
// import data2 from './data2.js';
import data2 from './data2.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import TeaDetail from './routes/TeaDetail.js';
import TeaCard from './TeaCard.js';

function App() {
  const [coffee] = useState(data);

  const [tea] = useState(data2);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Cafe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/coffee/0')}>Coffee</Nav.Link>
            <Nav.Link onClick={() => navigate('/Tea/0')}>Tea</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <div>
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }} aria-label="카페 내부 사진"></div>
            <div className="container">
              <div className="row">
              <p className='title'>- COFFEE -</p>
                {
                  coffee.map((item, index) => (
                    <Card key={index} coffee={item} imageKey={`coffee${index + 1}`} />
                  ))
                }
                <p className='title'>- TEA -</p>
                {
                  tea.map((item, index) => (
                    <TeaCard key={index} tea={item} imageKey={`tea${index + 1}`} />
                  ))
                }
                
              </div>
            </div>

          </div>
        } />

        <Route path='/coffee/:id' element={<Detail coffee={coffee} />} />
        <Route path='/tea/:id' element={<TeaDetail tea={tea} />} />
      
      </Routes>
    </div>
  );
}

function Card(props) {
  const coffeeLink = `/coffee/${props.coffee.id}`; // 링크 주소 설정

  return (
    <div className="col-md-4">
      <a href={coffeeLink}>
        <div className="card-image-container">
          <img src={coffeeImages[props.imageKey]} width="70%" alt={props.coffee.alt} />
        </div>
      </a>
      <h4>{props.coffee.title}</h4>
      <p className='price'>{props.coffee.price}원</p>
    </div>
  );
}


export default App;