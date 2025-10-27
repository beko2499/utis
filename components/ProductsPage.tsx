import React from 'react';
import type { Product } from '../types';

const products: Product[] = [
  { id: 1, name: 'لوحة مفاتيح ميكانيكية', description: 'تجربة كتابة ولعب لا مثيل لها مع استجابة فائقة.', price: 350000, imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&q=80&fit=crop' },
  { id: 2, name: 'فأرة ألعاب لاسلكية', description: 'دقة عالية وتصميم مريح لجلسات لعب طويلة.', price: 220000, imageUrl: 'https://i.imgur.com/psMSNUh.jpeg' },
  { id: 3, name: 'سماعة رأس محيطية', description: 'صوت غامر وعزل ضوضاء ممتاز للمحترفين.', price: 450000, imageUrl: 'https://i.imgur.com/Ed0tqL4.jpeg' },
  { id: 4, name: 'كاميرا ويب 4K', description: 'جودة صورة فائقة الوضوح لاجتماعاتك وبثك المباشر.', price: 600000, imageUrl: 'https://i.imgur.com/PdV0TwG.jpeg' },
  { id: 5, name: 'شاشة عرض 27 بوصة', description: 'ألوان دقيقة ومعدل تحديث عالٍ لتجربة بصرية مذهلة.', price: 1200000, imageUrl: 'https://i.imgur.com/uSOkcCF.jpeg' },
  { id: 6, name: 'ميكروفون احترافي', description: 'تسجيل صوتي نقي وواضح بجودة استوديو.', price: 550000, imageUrl: 'https://i.imgur.com/bwZgtMw.jpeg' },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group border border-slate-100">
    <div className="overflow-hidden">
        <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src={product.imageUrl} alt={product.name} />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-slate-600 text-sm">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()} ج.س</span>
        <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span>أضف للسلة</span>
        </button>
      </div>
    </div>
  </div>
);

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold text-slate-900 sm:text-4xl sm:leading-10">
            منتجاتنا المتميزة
          </h2>
          <p className="mt-3 max-w-md mx-auto text-xl text-slate-500 sm:mt-4">
            تصفح مجموعتنا المختارة بعناية من أفضل ملحقات الحاسوب في السوق.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;