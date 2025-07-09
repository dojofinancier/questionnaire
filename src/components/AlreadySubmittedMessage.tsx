import React from 'react';
import { AlertCircle } from 'lucide-react';

export const AlreadySubmittedMessage: React.FC = () => {
  const handleReset = () => {
    localStorage.removeItem('questionnaire-submitted');
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <AlertCircle className="w-8 h-8 text-blue-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Questionnaire déjà complété
      </h2>
      
      <p className="text-gray-600 mb-6">
        Vous avez déjà complété ce questionnaire. Votre rapport personnalisé a été envoyé à votre adresse email.
      </p>
      
      <button
        onClick={handleReset}
        className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
      >
        Recommencer le questionnaire
      </button>
    </div>
  );
};