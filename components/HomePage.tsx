import React from 'react';
import type { Page } from '../types';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <img src="https://i.imgur.com/fDadcI4.jpeg" alt="Tech Background" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            UTIS: الشركة الاولة في المنتجات التقنية
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            نحن نقدم أفضل ملحقات الحاسوب لتعزيز إنتاجيتك وتجربتك الرقمية. الجودة والابتكار في كل منتج.
          </p>
          <div className="mt-10">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('products'); }} className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300">
              <span>اكتشف منتجاتنا</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">عن الشركة</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              رواد في عالم ملحقات الحاسوب
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              تأسست UTIS على مبدأ توفير حلول تقنية مبتكرة وعالية الجودة. نحن نسعى لنكون الخيار المفضل للمحترفين والهواة على حد سواء.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-16">
            <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-4">
                 <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">رؤيتنا</h3>
              </div>
              <p className="mt-4 text-slate-600">
                أن نكون الشركة الرائدة في توفير ملحقات الحاسوب الأكثر ابتكاراً وموثوقية في السوق، مما يساهم في تمكين المستخدمين من تحقيق أقصى إمكاناتهم.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4">
                 <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">مهمتنا</h3>
              </div>
              <p className="mt-4 text-slate-600">
                تقديم منتجات ذات جودة استثنائية وخدمة عملاء لا تضاهى. نلتزم بالتحسين المستمر والاستماع لعملائنا لتلبية احتياجاتهم المتطورة في العصر الرقمي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;