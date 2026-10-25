/* Альфа-Сигнал: демонстрационный набор данных на основе тем аналитических материалов из PDF кейса.
   Это не live-новости. Все бизнес-выводы ниже — демонстрационные интерпретации, а не прогнозы банка. */
const companies = {
  severstal: {
    name: 'Северсталь', industry: 'Металлургия', tags: ['Сырьё и энергия', 'Капиталоёмкое производство', 'Внешний спрос'],
    description: 'Демонстрационный профиль: крупный производитель стали. Для такого бизнеса важны стоимость финансирования, цены на сырьё и энергию, промышленный спрос и логистика.',
    news: ['rate','gdp','labor','bonds']
  },
  x5: {
    name: 'X5 Group', industry: 'Продуктовый ритейл', tags: ['Потребительский спрос', 'Инфляция', 'Фонд оплаты труда'],
    description: 'Демонстрационный профиль: продуктовый ритейл. Приоритетны динамика потребления, инфляция, расходы на персонал и стоимость оборотного капитала.',
    news: ['inflation','consumption','labor','rate']
  },
  ozon: {
    name: 'Ozon', industry: 'Электронная коммерция', tags: ['Потребительский спрос', 'Логистика', 'Стоимость капитала'],
    description: 'Демонстрационный профиль: электронная коммерция и логистика. Значимы потребительская активность, расходы на инфраструктуру, финансирование и динамика рынка труда.',
    news: ['consumption','rate','gdp','labor']
  }
};
const news = {
  rate: {
    date:'Материал кейса · 2026', category:'Денежно-кредитная политика', title:'Ключевая ставка: 14%, риторика стала жёстче',
    summary:'В материалах кейса указано сохранение ключевой ставки на уровне 14% и более жёсткая риторика регулятора.', type:'risk', score:96,
    why:'Для компании с потребностью в кредитовании это означает, что быстрое удешевление заёмных денег не гарантировано. Значимость зависит от долговой нагрузки, графика рефинансирования и инвестиционной программы.',
    risks:['Высокая стоимость нового финансирования может увеличить расходы.','Инвестиционные проекты с низкой ожидаемой доходностью могут потребовать пересмотра.'],
    opportunities:['Проверить условия действующих кредитных линий и график погашений.','Сравнить сценарии финансирования и чувствительность бюджета к ставке.'],
    bank:'«Ключевая ставка ЦБ РФ: ставка без изменения на 14,0%, риторика стала жестче».', sourceLabel:'Материал из приложения к кейсу', sourceUrl:'', confidence:'Средняя: фактическая тема задана в материалах кейса; влияние на компанию зависит от её финансового профиля.'
  },
  inflation: {
    date:'Материал кейса · август 2026', category:'Инфляция и издержки', title:'Инфляция: основные выводы за 25–31 августа',
    summary:'В пакете материалов Альфа-Банка есть еженедельный обзор инфляции. Для ритейла важно отслеживать, как изменение цен отражается на закупках и покупательском поведении.', type:'risk', score:91,
    why:'Для продуктового ритейла инфляция может одновременно увеличивать закупочные цены и менять структуру корзины покупателей. Итоговый эффект зависит от возможности пересматривать цены и от чувствительности спроса.',
    risks:['Рост закупочных цен может давить на маржу.','Покупатели могут переходить на более дешёвые товары и собственные торговые марки.'],
    opportunities:['Проверить динамику маржи по категориям и долю промо-продаж.','Сопоставить изменение среднего чека с количеством покупок и составом корзины.'],
    bank:'«Инфляция 25–31 августа: основные выводы».', sourceLabel:'Материал из приложения к кейсу', sourceUrl:'', confidence:'Средняя: интерпретация является гипотезой для проверки на данных компании.'
  },
  consumption: {
    date:'Материал кейса · 2026', category:'Потребительский спрос', title:'«Потребление на пике»: сигнал для оценки спроса',
    summary:'В аналитическом пакете Альфа-Банка представлен материал «Потребление на пике». Он может использоваться как макроэкономический контекст при оценке продаж и потребительской активности.', type:'opportunity', score:89,
    why:'Для ритейла и электронной коммерции изменение потребительской активности влияет на продажи, ассортимент, запасы и планирование логистических мощностей. Одного макросигнала недостаточно — его нужно сопоставить с данными компании.',
    risks:['Если спрос замедлится, избыточные запасы могут увеличить затраты.'],
    opportunities:['Сопоставить динамику рынка с собственными продажами по категориям.','Проверить, где рост спроса оправдывает расширение ассортимента или запасов.'],
    bank:'«Потребление на пике».', sourceLabel:'Материал из приложения к кейсу', sourceUrl:'', confidence:'Средняя: материал задаёт тему анализа, но не доказывает рост продаж конкретной компании.'
  },
  labor: {
    date:'Материал кейса · 7 месяцев 2026', category:'Рынок труда', title:'Данные рынка труда не подтверждают охлаждения экономики',
    summary:'В перечне аналитических материалов кейса есть обзор макростатистики за 7 месяцев 2026 года с таким выводом о рынке труда.', type:'risk', score:82,
    why:'Для компаний с большим штатом устойчивый рынок труда может означать сохранение конкуренции за сотрудников и давления на фонд оплаты труда. Реальный эффект нужно проверять по регионам и профессиям.',
    risks:['Расходы на персонал могут расти быстрее производительности.','Сложности найма могут ограничивать расширение операций.'],
    opportunities:['Сравнить расходы на персонал с производительностью и выручкой.','Выявить операции, где автоматизация или изменение графиков снизят нагрузку.'],
    bank:'«Макростатистика 7М26: данные по рынку труда не подтверждают охлаждения экономики».', sourceLabel:'Материал из приложения к кейсу', sourceUrl:'', confidence:'Средняя: макроданные не заменяют анализ рынка труда конкретной компании.'
  },
  gdp: {
    date:'Материал кейса · первое полугодие 2026', category:'Макроэкономика', title:'Прогноз роста ВВП смещён к 0,1% за год',
    summary:'Согласно названию материала в пакете кейса, слабый рост в первом полугодии смещает прогноз роста ВВП на 0,1% за год.', type:'risk', score:85,
    why:'Слабая динамика экономики может повлиять на промышленный спрос и планы клиентов. Для производителя эффект зависит от структуры продаж, экспортных рынков, контрактов и отраслевой конъюнктуры.',
    risks:['Клиенты могут откладывать инвестиции и закупки.','Планирование выпуска и запасов требует осторожных сценариев.'],
    opportunities:['Проверить портфель заказов и концентрацию выручки по отраслям.','Подготовить базовый и стресс-сценарии спроса.'],
    bank:'«Макростатистика 1П26: слабый рост 1П26 смещает прогноз роста ВВП на 0,1% за год».', sourceLabel:'Материал из приложения к кейсу', sourceUrl:'', confidence:'Средняя: макроэкономический прогноз не является прогнозом выручки конкретной компании.'
  },
  bonds: {
    date:'Материал кейса · 2026', category:'Финансовые рынки', title:'Итоги недели на рынке облигаций',
    summary:'В приложении к кейсу есть еженедельный материал «Бонд Бриф». Он может выступать дополнительным контекстом при оценке условий долгового финансирования.', type:'opportunity', score:74,
    why:'Для капиталоёмкой компании условия рынка облигаций могут влиять на стоимость и доступность альтернативного заёмного финансирования. Для вывода нужны актуальные доходности, рейтинг и параметры конкретного выпуска.',
    risks:['Рыночные условия могут сделать размещение дороже ожидаемого.'],
    opportunities:['Сравнить банковское финансирование с возможным выпуском облигаций.','Проверить сроки рефинансирования и доступные инструменты управления долгом.'],
    bank:'«Бонд Бриф: итоги недели».', sourceLabel:'Материал из приложения к кейсу', sourceUrl:'', confidence:'Низкая без конкретных рыночных котировок и финансовых параметров компании.'
  }
};
let selectedNewsId = null;
const companySelect = document.getElementById('companySelect');
const typeFilter = document.getElementById('typeFilter');
Object.entries(companies).forEach(([id,c])=>{const opt=document.createElement('option');opt.value=id;opt.textContent=c.name;companySelect.appendChild(opt)});
function render(){
 const company=companies[companySelect.value];
 document.getElementById('companyTags').innerHTML=company.tags.map(t=>`<span class="tag">${t}</span>`).join('');
 document.getElementById('companyDescription').textContent=company.description;
 const companyNews=company.news.map(id=>({id,...news[id]})).sort((a,b)=>b.score-a.score);
 const riskCount=companyNews.filter(n=>n.type==='risk').length, oppCount=companyNews.filter(n=>n.type==='opportunity').length;
 document.getElementById('metrics').innerHTML=`<div class="metric"><div class="metric-label">Значимых событий</div><div class="metric-value">${companyNews.length}</div><div class="metric-note">В демонстрационном наборе</div></div><div class="metric"><div class="metric-label">Потенциальные риски</div><div class="metric-value">${riskCount}</div><div class="metric-note">Требуют проверки на данных компании</div></div><div class="metric"><div class="metric-label">Возможности</div><div class="metric-value">${oppCount}</div><div class="metric-note">Гипотезы для дальнейшей оценки</div></div>`;
 const filtered=companyNews.filter(n=>typeFilter.value==='all'||n.type===typeFilter.value);
 if(!filtered.some(n=>n.id===selectedNewsId)) selectedNewsId=filtered[0]?.id||null;
 document.getElementById('newsList').innerHTML=filtered.map(n=>`<article class="news-card ${n.id===selectedNewsId?'selected':''}" data-id="${n.id}" tabindex="0"><div class="news-card-top"><span class="news-meta">${n.category} · ${n.date}</span><span class="status ${n.type}">${n.type==='risk'?'Потенциальный риск':'Возможность'}</span></div><h4>${n.title}</h4><p class="news-summary">${n.summary}</p><div class="relevance"><span>Значимость для профиля</span><span class="score">${n.score}/100</span></div></article>`).join('')||'<div class="empty">Нет событий по выбранному фильтру.</div>';
 document.querySelectorAll('.news-card').forEach(card=>{const select=()=>{selectedNewsId=card.dataset.id;render()};card.addEventListener('click',select);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select()}})});
 renderDetail(company, selectedNewsId?news[selectedNewsId]:null);
}
function renderDetail(company,n){
 const el=document.getElementById('analysisDetail');
 if(!n){el.innerHTML='<div class="empty">Выберите событие.</div>';return}
 el.innerHTML=`<span class="source-type">${n.type==='risk'?'РИСК':'ВОЗМОЖНОСТЬ'}</span><span class="source-type">ЗНАЧИМОСТЬ ${n.score}/100</span><h3 class="analysis-title">${n.title}</h3><div class="analysis-block"><h4>Что произошло</h4><p>${n.summary}</p></div><div class="analysis-block"><h4>Почему это важно для ${company.name}</h4><p>${n.why}</p></div><div class="analysis-block"><h4>Возможные риски</h4><ul>${n.risks.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="analysis-block"><h4>Возможности и следующие действия</h4><ul>${n.opportunities.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="analysis-block"><h4>Аналитика Альфа-Банка</h4><p>${n.bank}</p><p style="margin-top:7px"><span class="source-type">Материал кейса</span></p></div><div class="analysis-block"><h4>Уверенность и ограничения</h4><p>${n.confidence}</p></div><div class="analysis-block"><h4>Уточнить по событию</h4><div class="question-box"><input id="questionInput" placeholder="Например, что проверить в первую очередь?"/><button id="askButton">Ответ</button></div><div id="answerBox" class="answer-box"></div></div>`;
 document.getElementById('askButton').addEventListener('click',()=>answerQuestion(n,company));
 document.getElementById('questionInput').addEventListener('keydown',e=>{if(e.key==='Enter')answerQuestion(n,company)});
}
function answerQuestion(n,company){const q=document.getElementById('questionInput').value.trim();const box=document.getElementById('answerBox');if(!q){box.style.display='block';box.textContent='Введите вопрос, чтобы посмотреть демонстрационный ответ.';return}box.style.display='block';box.textContent=`Демонстрационный ответ для ${company.name}: начните с проверки ${n.type==='risk'?'финансовой чувствительности и возможных затрат':'динамики спроса и возможностей роста'}. Сопоставьте вывод с внутренними показателями компании и исходным материалом «${n.bank}». Это заранее подготовленная логика прототипа, а не ответ работающей LLM.`}
companySelect.addEventListener('change',()=>{selectedNewsId=null;render()});typeFilter.addEventListener('change',render);render();
