# [NewsExplorer](https://v1ktorbro.github.io/news-explorer/index.html)

**[ Base URL: newsexplorer.abrosimov.site ]**


## Инструменты
**REACT, JS, GIT, CSS, HTML, FIGMA, NGINX, UBUNTU, TRELLO.**

## О проекте 
*NewsExplorer - сервис по поиску новостей. На сайте присутствует возможность поиска новостей на любую тематику, а также ее просмотр. После регистрации появляется возможность сохранения и удаления новостей в избранные.*

* Запросы по поиску новостей передаются по api [NewsApi.org](https://newsapi.org/);

* Запросы на регистрацию, авторизацию, сохранение и удаление из избранных карточки с новостью отправляются на свой бэк, [подробнее](https://github.com/v1ktorbro/api-news-explorer); 

* Аунтификация пользователя происходит с помощью JWT, который выдается сервером сроком на 7 дней и сохраняется в localStorage пользователя.


## Хостинг
Приложение можно протестировать по 2 ссылкам:

* [gh-pages](https://v1ktorbro.github.io/news-explorer/index.html);
* [newsexplorer.abrosimov.site](https://newsexplorer.abrosimov.site/).

**P.S.** Рекомендую для тестирования приложения выбирать [gh-pages](https://v1ktorbro.github.io/news-explorer/index.html). Так как [NewsApi.org](https://newsapi.org/) для запросов с домена требуется оплатить [подписку](https://newsapi.org/pricing) и поэтому запросы с 
[newsexplorer.abrosimov.site](https://newsexplorer.abrosimov.site/) будут выдавать, что 'ничего не найдено'.

## Бэкэнд
Для регистрации, авторизации и работы с карточками был написан небольшой бэк  на express js. Приложение работает по руту домена [newsexplorer.abrosimov.site/api/](https://newsexplorer.abrosimov.site/api/). Подробнее о бэкэнде [тут](https://github.com/v1ktorbro/api-news-explorer).
