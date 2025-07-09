import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailCollectionProps {
  onEmailSubmit: (email: string) => void;
  isSubmitting: boolean;
}

export const EmailCollection: React.FC<EmailCollectionProps> = ({
  onEmailSubmit,
  isSubmitting
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Veuillez saisir votre adresse email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Veuillez saisir une adresse email valide');
      return;
    }
    
    setError('');
    onEmailSubmit(email);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Questionnaire terminé !
        </h2>
        <p className="text-gray-600">
          Saisissez votre adresse email pour recevoir votre rapport personnalisé sur la santé financière de votre entreprise.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              error 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-300 focus:border-orange-500'
            } focus:outline-none`}
            placeholder="votre@email.com"
            disabled={isSubmitting}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon rapport'}
        </button>
      </form>
    </div>
  );
};