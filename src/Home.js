import "./css/style.css";
import "./css/bootstrap.min.css";
import "./App.css";
import w2 from "./images/w2.jpg";
import { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <body class="body-bg">
        <Link to="/login">
          <button
            class="btn btn-outline-light"
            style={{ borderRadius: 10, margin: 10 }}
          >
            Редактор
          </button>
        </Link>

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
                      <a href="tel:+81111111111">+ 7 111 111 11 11</a>
                    </li>
                    <li>
                      <a href="mailto:vladilena@yandex.ru">
                        vladilena@yandex.ru
                      </a>
                    </li>
                    <li>
                      <a href="callto:vladilena">Skype: vladilena</a>
                    </li>
                  </ul>
                  <div class="address">
                    <p style={{ textAlign: "center" }}>
                      Высоковольтная 34, Рязань
                    </p>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-6">
                  <hr class="bg-white d-sm-none d-md-block" />
                  <section class="mt-3">
                    <h2>Качества</h2>
                    <ul>
                      <li>Грамотная письменная и устная речь</li>
                      <li>Аккуратность</li>
                      <li>Исполнение поручений в срок</li>
                      <li>Сохранение самообладания в сложных ситуациях</li>
                      <li>Добросовестное отношение к трудовым обязанностям</li>
                      <li>Гибкость мышления</li>
                      <li>Динамичность в исполнении поручений</li>
                      <li>Умение слушать</li>
                    </ul>
                  </section>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <hr class="bg-white d-none d-sm-block d-md-none d-lg-none" />
                  <div class="section">
                    <h2>Образование</h2>
                    <ul>
                      <li>
                        2006-2012, Спасская детская школа искусств, гитара
                      </li>
                      <li>2007-2018, Спасская Гимназия</li>
                      <li>2018-2023, РГРТУ, Экономист</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="section">
                    <h2>Достижения</h2>
                    <ul>
                      <li>
                        Призер олимпиады по литературе среди 5 классов: 2012
                      </li>
                      <li>
                        Победитель олимпиады по математике среди 7 классов: 2014
                      </li>
                      <li>Призер конференции по экономике: 2020</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-8 cv-right">
              <article>
                <header>
                  <h1 class="text-center cv-header mt-5 mb-4">
                    Владилена Александровна{" "}
                    <span class="color-grey">Останина</span>
                  </h1>
                  <h2 class="job-title text-center lines color-grey mb-4">
                    Резюме
                  </h2>
                  <h3 class="mb-3 profile color-grey">Обо мне</h3>
                  <p class="mb-5">
                   <li>Уверенный пользователь ПК, владею следующими программами: Microsoft Word, Microsoft Excel,  Microsoft Power Point, Microsoft Publisher, 1С Бухгалетрия 7 и 8, Клиент-Банк.</li>
                   <li>Опыт работы более трех лет в бухгалтерской сфере, один из которых в бюджетной организации. Обладаю знаниями в области бухгалтерского, налогового учета, финансового анализа и бюджетирования.</li> 
                    </p>
                  <h3 class="mb-3 expirience color-grey">Опыт работы</h3>
                  <section class="mb-5">
                    <h4 class="company-name mb-2">Альфа-строй, 2019-2019</h4>
                    <h5>Пощник бухгалетра</h5>
                    <p>
                      Замените своими ключевыми обязанностями, достижениями и
                      навыками, которые могут иметь отношение к должности, на
                      которую вы претендуете. Включите ключевые слова из списка,
                      чтобы привлечь внимание работодателя и соответствовать
                      требованиям системы отслеживания кандидатов. ваши ключевые
                      обязанности
                    </p>
                  </section>
                  <section class="mb-5">
                    <h4 class="company-name mb-2">Почта России, 2020 - 2020</h4>
                    <h5>Бухгалтер</h5>
                    <p>
                      Замените своими ключевыми обязанностями, достижениями и
                      навыками, которые могут иметь отношение к должности, на
                      которую вы претендуете. Включите ключевые слова из списка,
                      чтобы привлечь внимание работодателя и соответствовать
                      требованиям системы отслеживания кандидатов. ваши ключевые
                      обязанности
                    </p>
                  </section>
                  <section class="mb-5">
                    <h4 class="company-name mb-2">Газпром, 2021 - 2021</h4>
                    <h5>Пощник бухгалетра</h5>
                    <p>
                      Замените своими ключевыми обязанностями, достижениями и
                      навыками, которые могут иметь отношение к должности, на
                      которую вы претендуете. Включите ключевые слова из списка,
                      чтобы привлечь внимание работодателя и соответствовать
                      требованиям системы отслеживания кандидатов. ваши ключевые
                      обязанности
                    </p>
                  </section>
                </header>
              </article>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
