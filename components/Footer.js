export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">عن المتجر</h3>
            <p className="text-gray-300 text-sm">
              متجر ملابس إلكترونية حديث يقدم أفضل المنتجات بأسعار منافسة
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-secondary">الرئيسية</a></li>
              <li><a href="/products" className="hover:text-secondary">المنتجات</a></li>
              <li><a href="/about" className="hover:text-secondary">عن المتجر</a></li>
              <li><a href="/contact" className="hover:text-secondary">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <p className="text-gray-300 text-sm mb-2">📱 +966 50 000 0000</p>
            <p className="text-gray-300 text-sm mb-2">📧 info@store.com</p>
            <p className="text-gray-300 text-sm">📍 الرياض، السعودية</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-xl hover:text-secondary">f</a>
            <a href="#" className="text-xl hover:text-secondary">𝕏</a>
            <a href="#" className="text-xl hover:text-secondary">📷</a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 متجر الملابس. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
}