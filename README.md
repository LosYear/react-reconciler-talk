# React Reconciler: как написать собственный рендерер

Доклад повествует о том, что такое "реконсиляция" в React, какой путь проходит компонент от кода до отрисовки на экран и
как написать свой собственный рендерер на примере отрисовки React-компонентов в Figma.


[Слайды](https://speakerdeck.com/losyear/react-reconciler-kak-napisat-sobstviennyi-riendierier)

[Видео](https://youtu.be/3Yy_YUTZxe4?t=3120)

Репозиторий содержит материалы доклада, исходный код демо и дополнительные материалы по теме.

## Как запустить
1. Установить [Figma](https://www.figma.com/)
2. Склонировать репозиторий
3. Перейти в папку с репозиторием и установить все зависимости, например, используя `yarn`
4. Запустить стартовый скрипт:

    ```shell script
    yarn run start
    ```
    или
    ```shell script
    npm run start
    ```

5. Добавить плагин в Figma:
    1. Создать новый документ
    2. `Plugins` -> `Development` -> `New plugin`...
    3. Нажмите `Link existing plugin` и укажите путь к `manifest.json`, находящемуся в корне папки с репозиторием
6. Запустите:
    
    `Plugins` -> `Development` -> `Talk – Custom renderer` 

## Дополнительные материалы
### Архитектура React
* [React Docs: Reconciliation](https://reactjs.org/docs/reconciliation.html)
* [React Docs: Components, Elements and Instances](https://ru.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
* [Lin Clark – A Cartoon Intro to Fiber – React Conf 2017](https://www.youtube.com/watch?v=ZCuYPiUIONs)
* [Maxim Koretskyi – Inside Fiber: in-depth overview of the new reconciliation algorithm in React](https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/)
* [Maxim Koretskyi – The how and why on React’s usage of linked list in Fiber to walk the component’s tree](https://medium.com/react-in-depth/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7)
* [Rodrigo Pombo – Building your own React](https://pomb.us/build-your-own-react/)
### Написание рендерера
* [React Reconciler package](https://github.com/facebook/react/tree/master/packages/react-reconciler)
* [Atul R – Beginners guide to Custom React Renderers](https://blog.atulr.com/react-custom-renderer-1/)
* [Manas Jayanth – Learn how React Reconciler package works by building your own lightweight React DOM](https://hackernoon.com/learn-you-some-custom-react-renderers-aed7164a4199)
* [Sophie Alpert – Building a Custom React Renderer](https://www.youtube.com/watch?v=CGpMlWVcHok)
* [Aziz Khambati – Building an Async React Renderer with Diffing in Web Worker](https://medium.com/@azizhk/building-an-async-react-renderer-with-diffing-in-web-worker-f3be07f16d90)
### Ссылки
* [Awesome React Renderer list](https://github.com/chentsulin/awesome-react-renderer)
* [React Figma](https://react-figma.now.sh/)

