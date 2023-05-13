import logo2 from './logo2.png';
import anual from './anual.png';
import React, { Component } from 'react';
import './App.css';
import api from './Calendar/api';
import { BsPersonHearts, BsHearts, BsAppIndicator } from 'react-icons/bs';
import { ImHome, ImCalendar, ImCreditCard, ImCart } from 'react-icons/im';
import { BiCopyright, BiCalendar } from 'react-icons/bi';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Promocoes from './pages/Promocoes/Promocoes';
import Home from './Components/Home/Home';
import Calendar from './pages/Calendar/Calendar';
import Historico from './pages/Historico/Historico';

class App extends Component {
  state = {
    feriados: [],
  };

  async componentDidMount() {
    const response = await api.get('');
    //console.log(response.data);

    this.setState({ feriados: response.data });
  }

  render() {
    const { feriados } = this.state;

    return (
      
      <Router>  
      <div className="App">
        
                  <header className="App-header">
          <nav>
            <ul>
              <li>
                <br></br>
                <span className="icon">
                  
                  <ImHome size={30} />
                </span>{' '}
                
                  <Link to="/Home">Home</Link> 
              </li>
              <li>
                <br></br>
                <span className="icon">
                  <ImCalendar size={30} />
                </span>{' '}
               
                  <Link to="/Calendar">Calendario</Link>  
              </li>
              <li>
                <br></br>
                <span className="icon">
                  <ImCreditCard size={30} />
                </span>{' '}
                
                  <Link to="https://www.superpaguemenos.com.br/maes-ambev/?map=cl">Promoções</Link> 
              </li>
              <li>
                <br></br>
                <span className="icon">
                  <ImCart size={30} />
                </span>{' '}
                
                  <Link to="https://b2biamgbusprod.b2clogin.com/b2biamgbusprod.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1a_signin_br&redirect_uri=https%3A%2F%2Fmybees.com.br%2Fapi%2Fauth%2Fverify&response_type=id_token&response_mode=form_post&client_id=d18a1185-c0ff-4e14-a7c2-ee227a48bbe1&ui_locales=pt-BR&state=n48rKbJUsmHYmWafScLrpGtuo7aNTFZJ&nonce=lnZOSwp36I9yYQepyggaEgxngbi0qEWU&scope=profile%20openid&x-client-SKU=passport-azure-ad&x-client-Ver=4.0.0">Histórico de Compras</Link>  
              </li>
            </ul>
                                      
            <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Calendar' element={<Calendar/>} />
          <Route path='/Calendario' element={<Home />} />
          <Route path='/Promocoes' element={<Promocoes />} />
          <Route path='/Historico' element={<Historico />} />

        </Routes>
    
    <div className='App'>
            </div>
          </nav>
          <img src={logo2} className="App-logo2" alt="logo2" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <h1>
              Atenção! <br></br>Adiante a visita com o seu representante.
              <br></br>Ponto facultativo em: 8 de Junho - CORPUS CHRISTI.
              <br></br> <br></br>
              <br></br>
            </h1>
            <span className="icon">
              <BiCalendar />
            </span>{' '}
            CALENDÁRIO
            {feriados.map((qqq) => (
              <li key={qqq.date}>
                <br />
                {qqq.date} || {qqq.name}
              </li>
            ))}
            <br></br> <br></br>
            <img src={anual} className="App-anual" alt="anual" />
          </div>
          <br></br> <br></br>
          <br></br> <br></br>
          <p>
            <h1>
              <span className="icon">
                <BsPersonHearts />
              </span>{' '}
              O "Dia das Mães" está chegando, <br></br>
              veja nossas indicações e promoções!
              <span className="icon">
                <BsHearts />
              </span>{' '}
            </h1>
          </p>
          <br></br> <br></br> <br></br> <br></br>
          <footer>
            <p>
              <span className="icon">
                <BiCopyright />
              </span>{' '}
              2023 GRUPO 2 S.A. Todos os direitos reservados.
            </p>
            <p>
              Beba com moderação. Não compartilhe este conteúdo com menores de
              idade.
            </p>
          </footer>
        </header>
        
      </div>
    
    
      </Router>
    );
  }
}

export default App;