/*;============================
; Mia Berth
;==============================*/

import { useState } from 'react';
import './App.css';
import CitiesDropdown from './components/forms/CitiesDropdown';
import CountriesDropdown from './components/forms/CountriesDropdown';

function validate(values) {
  const errors = {};

  const possibleErrors = {
    name: '',
    email: '',
    cpf: '',
    phone: '',
    country: '',
    city: '',
  };

  Object.keys(possibleErrors).forEach(function (item) {
    if(typeof values[item] === 'undefined' || values[item] === '') {
      errors[item] = 'Este campo é obrigatório';
    }
  });

  
  if(typeof values.name != 'undefined' && values.name.length > 0 && values.name.length < 3) {
    errors.name = 'Por favor, insira um nome válido acima de 2 caracteres';
  }

  if(typeof values.email != 'undefined' && values.email.length > 0 && !values.email.includes('@') ) {
    errors.email = 'Por favor, insira um email válido';
  }

  if(typeof values.phone != 'undefined' && values.phone.length > 0 && (values.phone.length < 8 || !/^\d+$/.test(values.phone))) {
    errors.phone = 'Por favor, insira um telefone válido acima de 8 digitos (sem espaços e apenas dígitos)';
  }

  if(typeof values.cpf != 'undefined' && values.cpf.length > 0 && (values.cpf.length < 11 || !/^\d+$/.test(values.cpf))) {
    errors.cpf = 'Por favor, insira um cpf válido acima de 11 digitos (sem espaços e apenas dígitos)';
  }

  return errors;
}


function succeed() {
  const success = {
    log: 'Envio sucedido.'
  }
  return success;
}

function notSucceed() {
  const success = {
    log: ''
  }
  return success;
}

function App() {

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState({});

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    
    setFormValues({...formValues, [name]: value})
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('*** formValues', formValues);

    setErrors(validate(formValues));
    if(Object.keys(validate(formValues)).length === 0){
      setSuccess(succeed(success));
    }
    else {
      setSuccess(notSucceed(success));
    }
    
  }

  
  return (
    <>
    <h1 className='title'>Desafio Parte 2 Ally</h1>
    <div className="container">

      <form onSubmit={handleSubmit}>
        
        {errors.name && <span className="formField__error">{errors.name}</span>}
        <input type='text' name='name' placeholder='Nome' onChange={handleInputChange} value={formValues.name || ''} />

        {errors.email && <span className="formField__error">{errors.email}</span>}
        <input type='text' name='email' placeholder='E-Mail' onChange={handleInputChange} value={formValues.email || ''} />

        {errors.phone && <span className="formField__error">{errors.phone}</span>}
        <input type='tel' name='phone' placeholder='Telefone' onChange={handleInputChange} value={formValues.phone || ''} />

        {errors.cpf && <span className="formField__error">{errors.cpf}</span>}
        <input type='tel' name='cpf' placeholder='CPF' onChange={handleInputChange} value={formValues.cpf || ''} />


        {errors.country && <span className="formField__error">{errors.country}</span>}
        <CountriesDropdown id='country' state='country' onChange={handleInputChange} />

        {errors.city && <span className="formField__error">{errors.city}</span>}
        <CitiesDropdown id='city' state='city' country={formValues.country} onChange={handleInputChange} />



        <button type='submit'>Enviar</button>
        <p className='success'>{success.log}</p>

      </form>
    </div>
    <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              
            </a>
            <span class="mb-3 mb-md-0 text-muted">2022, Mia Leandro Berth</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

          <li class="ms-3"><a href='https://github.com/berthrage' class="text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a></li>
          
          <li class="ms-3"><a href='https://www.instagram.com/berthoncloud9/' class="text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a></li>

          
          </ul>
        </footer>
      </div></>
    
  );
}

export default App;
