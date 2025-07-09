import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ThankYouMessage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Merci pour votre participation !
      </h2>
      
      <p className="text-gray-600 mb-6">
        Votre rapport personnalisé sur la santé financière de votre entreprise sera envoyé à votre adresse email dans les prochaines minutes.
      </p>
      
      <div className="text-sm text-gray-500">
        <p>Si vous ne recevez pas l'email, pensez à vérifier vos courriers indésirables.</p>
      </div>
    </div>
  );
};