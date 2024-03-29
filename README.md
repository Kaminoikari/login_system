# A13: 【選修】帳密檢查機制

A sample login system.

This is a student project that built on Node.js with Express framework.

![576C7F5B-BFC2-45CB-B813-4E26359345D7](https://user-images.githubusercontent.com/55652178/160292611-9c14433a-a4a9-4221-921e-ec4d3ccdd360.jpeg)


# 簡易登入系統
這是一個用 Node.js + Express 架設網站的練習專案。

# 練習目標
* 研究 Login 功能的製作思路。
* 處理 request & response。
* 研究 Express 頁面重新導向機制。
* 研究 Login 相關的 UX。

# 須完成
* 使用者在表單裡輸入帳密：email & password
* 發送表單，把帳密傳送給伺服器
* 伺服器拿到資料，開始比對內建的使用者名單
* 如果找不到 username，或是 password 錯誤，就彈回登入頁並且在介面上顯示「Username 或Password 錯誤」
* 如果 username + password 組合正確，使用者就進入自己的 welcome page，在此頁面上會顯示登入使用者的 firstName。

# 專案安裝流程

1. 請先安裝 Node.js、npm 與 Mongodb
2. 打開你的終端機，開啟資料庫，並將此專案 Clone 到本地

```
git clone https://github.com/Kaminoikari/login_system.git
```

3. 之後進入專案資料夾，輸入

```
npm install
```

4. 安裝完畢後，輸入以下內容 開始運行網站

```
載入種子資料 npm run seed
啟動網站 npm run start
```

若是跑出 "網站已開啟：localhost:3000" 代表成功，現在可以輸入網址，並開始使用了 

```
http:/localhost:3000
```

5. 要結束運行請按下 

```
ctrl + c
```

# 開發工具

* Node.js 14.16.0
* Nodemon 2.0.15
* Express 4.17.3
* Body-Parser 1.19.2
* Express-handlebars 4.0.2
* MongoDB
* mongoose 6.2.8
* Sweetalert2 11.4.7
