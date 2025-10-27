
import React from 'react';

const ContactInfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-slate-100">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
      {icon}
    </div>
    <div className="ms-4">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <div className="mt-1 text-slate-600">{children}</div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold text-slate-900 sm:text-4xl sm:leading-10">
            تواصل معنا
          </h2>
          <p className="mt-3 max-w-md mx-auto text-xl text-slate-500 sm:mt-4">
            نحن هنا للمساعدة. تواصل معنا لأي استفسار أو دعم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ContactInfoCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            title="مقر الشركة"
          >
            مدينة رفاعة، ولاية الجزيرة<br />
            السودان
          </ContactInfoCard>
          <ContactInfoCard 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            title="الهاتف"
          >
            <span dir="ltr">+249 912 345 678</span>
          </ContactInfoCard>
          <ContactInfoCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            title="البريد الإلكتروني"
          >
            zainab@utis-sd.com
          </ContactInfoCard>
        </div>

        <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30900.08994781745!2d33.7149028424075!3d15.111818167825064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1662a5b29381504d%3A0x86134b2234a9b699!2sRufaa%2C%20Sudan!5e0!3m2!1sen!2sus!4v1684502856123!5m2!1sen!2sus"
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
