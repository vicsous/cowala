import React, {useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Formulario.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

// Mascára de número de celular
const Input = ({ field, form, ...props }) => (
    <InputMask {...field} {...props} />
);
  
export default function Formulario(){
    const [meuIp, setMeuIp] = useState('')
    // Obtendo IP de API
    useEffect(() => {
        axios.get('https://ip-fast.com/api/ip/')
        .then(res => {
          setMeuIp(res.data)
        })
        .catch(error => {
          console.error(error);
        })
    }, [])
    
    // Obtendo dados salvos em navegador
    const valoresSalvos = JSON.parse(localStorage.getItem('meusDados'))

    const initialValues = {
      nome: '',
      profissao: '',
      celular: '',
      ip: ''
    }
    return (
        <div className="background">
        <Formik
          initialValues={ valoresSalvos || initialValues}
          validate={values => {
            const errors = {};
            if (!values.nome) {
              errors.nome = 'Nome não pode ser nulo';
            } else if (values.nome.length > 50) {
              errors.nome = 'Nome deve ter menos de 50 caracteres';
            }
  
            if (!values.profissao) {
              errors.profissao = 'Profissão não pode ser nulo';
            } else if (values.profissao.length > 50) {
              errors.profissao = 'Profissão deve ter menos de 50 caracteres';
            }
  
            let celLength = values.celular.replace(/\D/g, "").length;
            if (celLength < 11){
              errors.celular = 'Número de celular inválido';
            }
  
            if (!values.ip) {
              errors.ip = 'Meu Ip não pode ser nulo';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              localStorage.setItem('meusDados', JSON.stringify(values));
              alert('Dados salvos!')
              setSubmitting(false);
            }, 0);
          }}
        >
          {({ isSubmitting, setFieldValue, setValues}) => (
          <Form className="formulario">
              <div className="linha elemento">
                  <label className="etiqueta">Nome</label>
                  <Field name="nome" type="text" placeholder="João da Silva" className="campo radius"/>
                  <ErrorMessage name="nome" component="p" className="erro"/>
              </div>
              <div className="linha flex">
                  <div className="elemento profissao ">
                      <label className="etiqueta" >Profissão</label>
                      <Field name="profissao" type="text" placeholder="Carpinteiro" className="campo radius"/>
                      <ErrorMessage name="profissao" component="p" className="erro"/>
                  </div>
                  <div className="elemento celular">
                      <label className="etiqueta">Celular</label>
                      <Field name="celular" type="text"  placeholder="(99) 9 9999-9999" mask="(99) 9 9999-9999" component={Input} className="campo radius" />
                      <ErrorMessage name="celular" component="p" className="erro"/>
                  </div>
              </div>
              <div className="linha flex">
                  <div className="elemento meuIp">
                      <label className="etiqueta">Meu IP</label>
                      <Field 
                        name="ip"
                        type="text"
                        placeholder="255.255.255.255"
                        disabled={true}
                        className="campoMeuIp campo radius"/>
                        <ErrorMessage name="ip" component="p" className="erro"/>
                  </div>
                  <div className="elemento encontrarIp">                   
                      <label className="etiqueta">⠀</label>
                      <button
                        type="button"
                        onClick={() => {setFieldValue("ip", meuIp)}}
                        disabled={isSubmitting}
                        className="botaoEncontrarIp">ENCONTRAR IP</button>
                  </div>
              </div>
  
              <div className="linha flex enviar">
                  <button type="submit" disabled={isSubmitting} className="botaoSalvar radius">SALVAR</button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setValues({...initialValues})
                    }}

                    className="botaoLimpar radius">LIMPAR</button>
              </div>
          </Form>
          )}
        </Formik>
      </div>
    )
}