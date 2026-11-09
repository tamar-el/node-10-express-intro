# Part 1 - answers

Read the Express documentation (https://expressjs.com/en/5x/api.html) and answer in your own words.

## 1. What is inside the request object (`req`)?

The req object contains information about the HTTP request sent from the client to the server. For example, it includes URL parameters (req.params), query parameters (req.query), request body data (req.body), and request headers (req.headers).
<!--אובייקט req מכיל מידע על בקשת ה-HTTP שנשלחה מהלקוח לשרת, למשל:
- req.params – פרמטרים שמתקבלים מתוך כתובת ה-URL.
- req.query – ערכים שנשלחים בשורת הכתובת אחרי סימן שאלה.-->

## 2. What is inside the response object (`res`)?
The res object contains methods and properties that allow the server to send a response back to the client. For example, res.send() sends a response, res.json() sends JSON data, and res.status() sets the HTTP status code.
<!-- אובייקט res מכיל פונקציות ומאפיינים שמאפשרים לשרת לשלוח תגובה בחזרה ללקוח, למשל:
- res.send() – שולח תגובה ללקוח.
- res.json() – שולח מידע בפורמט JSON. -->

## 3. What does `app.use()` do?

The app.use() function is used to register middleware in an Express application. Middleware can perform tasks such as checking permissions, processing data, validating input, and logging requests. It can also use next() to pass control to the next middleware.
<!-- הפונקציה app.use() משמשת להוספת Middleware לאפליקציית Express.

ה-Middleware מופעל כאשר מגיעה בקשה לשרת, והוא יכול לבצע פעולות כמו בדיקת הרשאות, עיבוד מידע, בדיקת נתונים ותיעוד בקשות. -->
