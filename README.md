# [NewsExplorer](https://v1ktorbro.github.io/news-explorer-frontend/index.html)
**NewsExplorer** - сервис по поиску  новостей.

<nav 
  style='display: flex;'>
  <a 
    href='https://ru.reactjs.org/' 
    target='_blank'>
      <img 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207' 
        alt='Logo React.JS' 
        style='margin-right: 20px; width: 35px; height: 30px;'
      />
  </a>
  <a 
    href='https://expressjs.com/ru/' 
    target='_blank'>
      <img 
        src='https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg' 
        alt='Logo Express.JS' 
        style='margin-right: 20px;width: 70px; height: 30px; background-color: #fff;'
      />
  </a>
  <a 
    href='https://www.w3schools.com/js/js_es6.asp/' 
    target='_blank'>
      <img 
        src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' 
        alt='Logo JavaScript' 
        style='margin-right: 20px; width: 30px; height: 30px;'
      />
  </a>
  <a 
    href='https://www.mongodb.com/' 
    target='_blank'
    >
    <img 
      src='https://github.com/mongodb/mongo/raw/master/docs/leaf.svg' 
      alt='Logo MongoDb' 
      style='margin-right: 20px; width: 30px; height: 30px;'
    />
  </a>
  <a 
    href='https://cloud.yandex.com/en-ru/' 
    target='_blank'>
    <img 
      src='https://storage.yandexcloud.net/cloud-www-assets/constructor/content-program/icons/yandexcloud.svg' 
      alt='Logo Yandex.Cloud' 
      style='margin-right: 20px; width: 30px; height: 30px;'
    />
  </a>
  <a 
    href='https://expressjs.com/ru/' 
    target='_blank'>
      <img 
        src='https://www.svgrepo.com/show/303205/html-5-logo.svg' 
        alt='Logo HTML' 
        style='margin-right: 20px;width: 30px; height: 30px;'
      />
  </a>
  <a 
    href='https://expressjs.com/ru/' 
    target='_blank'>
      <img 
        src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' 
        alt='Logo HTML' 
        style='margin-right: 20px;width: 30px; height: 30px;'
      />
  </a>
  <a 
    href='https://expressjs.com/ru/' 
    target='_blank'>
      <img 
        src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' 
        alt='Logo CSS' 
        style='margin-right: 20px;width: 30px; height: 30px;'
      />
  </a>
</nav>

## О проеке 
* На главной странице запросы передаются в api [NewsApi.org](https://newsapi.org/). Запросы на сохранение, удаление карточек, а так же регистрации и аунтификации отправляются  на бэкэнд, написанный на express.js [ссылка на код](https://github.com/v1ktorbro/news-explorer-api);
* Авторизация пользователя происходит при помощи [JWT](https://www.npmjs.com/package/jsonwebtoken), который сохраняется в localStorage браузера;
* Запросы, оставленные при крайнем посещении страницы, записываются в localStorage.

### Корневая структура проекта

        components/ | 
        contexts/   | 
        fonts/      | 
        images/     | 
        utils/      | 
