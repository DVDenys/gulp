# 💻 GULP
- `Repository` https://github.com/dvdenys/gulp

---

## 📜 Available Scripts and Commands

```bash
# Install
npm i                    # install dependencies
npm i -g gulp            # install global gulp
```

```bash
# General
gulp            # run app in the development mode
```

```bash
# Deploy
gulp build            # builds the app for production
```

```bash
# P.S.
# Node.js v.14.18.1
```

## 🤌 Порядок импортов

### Для CSS
- Подключаем в html файл css/style.css 
- Папка app, создаем папку sass, в ней главный style.css, туда импортим остальные файлы, пример импорта @import 'wrapper'
- Пример назвы файла _wrapper.scss

### Для остальных файлов
- Подключаем нужный файл в html
- Для шрифтов, изображений, видео и скрипта свои директории с названиями: fonts, img, video, script соответственно

---