# استخدام صورة Node.js الرسمية
FROM node:18-alpine

# تعيين مجلد العمل
WORKDIR /app

# نسخ ملف package.json و package-lock.json
COPY package*.json ./

# تثبيت المتطلبات
RUN npm install

# نسخ باقي الملفات
COPY . .

# بناء التطبيق
RUN npm run build

# كشف المنفذ
EXPOSE 3000

# تشغيل التطبيق
CMD ["npm", "start"]
