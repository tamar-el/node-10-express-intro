# Part 1 - answers

Read the Express documentation (https://expressjs.com/en/5x/api.html) and answer in your own words.

## 1. What is inside the request object (`req`)?

<!--אובייקט req מכיל מידע על בקשת ה-HTTP שנשלחה מהלקוח לשרת, למשל:
- req.params – פרמטרים שמתקבלים מתוך כתובת ה-URL.
- req.query – ערכים שנשלחים בשורת הכתובת אחרי סימן שאלה.-->

## 2. What is inside the response object (`res`)?

<!-- אובייקט res מכיל פונקציות ומאפיינים שמאפשרים לשרת לשלוח תגובה בחזרה ללקוח, למשל:
- res.send() – שולח תגובה ללקוח.
- res.json() – שולח מידע בפורמט JSON. -->

## 3. What does `app.use()` do?

<!-- הפונקציה app.use() משמשת להוספת Middleware לאפליקציית Express.

ה-Middleware מופעל כאשר מגיעה בקשה לשרת, והוא יכול לבצע פעולות כמו בדיקת הרשאות, עיבוד מידע, בדיקת נתונים ותיעוד בקשות. -->
