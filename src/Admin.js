import logo from "./logo.svg";
import "./App.css";
import React, { Component, createRef, useContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "./css/style.css";
import "./css/bootstrap.min.css";
import w2 from "./images/w2.jpg";

export default function Admin(props){
 

  let Umenia = createRef();
  try {
    if (props.location.state.p1==1){
      return (
      <>
       <>
      <body class="body-bg">
        
          <button
            class="btn btn-outline-light"
            style={{ borderRadius: 10, margin: 10 }}
          >
            Сохранить
          </button>

        <div class="container mb-5">
          <div class="row cv">
            <div class="col-lg-3 col-md-4 cv-left">
              <div class="row">
                <div class="photo-block col-lg-12 col-md-12 col-sm-6">
                  <img
                    src={w2}
                    alt="myphoto"
                    class="img-thumbnail rounded-circle mt-3 mb-3"
                  />
                  <ul class="contacts-block text-center">
                    <li>
                      <a href="tel:++89106149098">+ 7 910 614 90 98</a>
                    </li>
                    <li>
                      <a href="mailto:gran1um@yandex.ru">gran1um@yandex.ru</a>
                    </li>
                    <li>
                      <a href="callto:alex.popov720">alex.popov720</a>
                    </li>
                   
                  </ul>
                  <div class="address">
                    <p style={{textAlign: 'center'}}>221B Baker Street, London</p>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-6">
                  <hr class="bg-white d-sm-none d-md-block" />
                  <section class="mt-3">
                    <h2  >Умения</h2>
                   <input type="text" style={{height: '300px'}} ref={Umenia} value='21212'/>
                  </section>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <hr class="bg-white d-none d-sm-block d-md-none d-lg-none" />
                  <div class="section">
                    <h2 >Образование</h2>
                    <ul >
                      <li>
                        2010-2015, University of Alabama English Language
                        Institute
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="section">
                    <h2 >Достижения</h2>
                    <ul >
                      <li>
                        Marketer of the Year Academic Scholorship Deans List:
                        2006-2007, National Merit Scholarship Corporation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-8 cv-right">
              <article>
                <header>
                  <h1 class="text-center cv-header mt-5 mb-4">
                    Владилена Александровна <span class="color-grey">Останина</span>
                  </h1>
                  <h2 class="job-title text-center lines color-grey mb-4">
                    Резюме
                  </h2>
                  <h3 class="mb-3 profile color-grey">Обо мне</h3>
                  <p class="mb-5">
                  Этот абзац станет вашим первым впечатлением для рекрутеров. Эффективное резюме краткое, краткое и сосредоточено на ваших самых важных моментах продажи. Вы должны согласовать свое резюме с требованиями к должности, выделив ключевые сильные стороны и навыки, которые действительно позволят вам выделиться как высококвалифицированный кандидат. Преобразование обязанностей в поддающиеся количественной оценке достижения с помощью чисел передает вашу ценность.
                  </p>
                  <h3 class="mb-3 expirience color-grey">Опыт работы</h3>
                  <section class="mb-5">
                    <h4 class="company-name mb-2">
                      Название комании - NEW YORK, <i>NY 2015 - Present</i>
                    </h4>
                    <h5>Должность</h5>
                    <p>
                    Замените своими ключевыми обязанностями, достижениями и навыками, которые могут иметь отношение к должности, на которую вы претендуете. Включите ключевые слова из списка, чтобы привлечь внимание работодателя и соответствовать требованиям системы отслеживания кандидатов. ваши ключевые обязанности
                    </p>
                  </section>
                  <section class="mb-5">
                    <h4 class="company-name mb-2">
                      Название комании - NEW YORK, <i>NY 2015 - Present</i>
                    </h4>
                    <h5>Должность</h5>
                    <p>
                    Замените своими ключевыми обязанностями, достижениями и навыками, которые могут иметь отношение к должности, на которую вы претендуете. Включите ключевые слова из списка, чтобы привлечь внимание работодателя и соответствовать требованиям системы отслеживания кандидатов. ваши ключевые обязанности
                    </p>
                  </section>
                  <section class="mb-5">
                    <h4 class="company-name mb-2">
                      Название комании - NEW YORK, <i>NY 2015 - Present</i>
                    </h4>
                    <h5>Должность</h5>
                    <p>
                    Замените своими ключевыми обязанностями, достижениями и навыками, которые могут иметь отношение к должности, на которую вы претендуете. Включите ключевые слова из списка, чтобы привлечь внимание работодателя и соответствовать требованиям системы отслеживания кандидатов. ваши ключевые обязанности
                    </p>
                  </section>

                </header>
              </article>
            </div>
          </div>
        </div>
      </body>
    </>
      </>
      );
      }
      else {
        return(
          <>
          <div style={{display: 'flex', textAlign: 'center', marginTop: 'auto', height: '600px', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
        Попробуй еще раз
        </div>
        </>
        )}  
    } catch (e) {
      return(<>
      Error
      </>)
    }
   
}
