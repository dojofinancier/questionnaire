import React from 'react';
import { Shield, Clock, FileText } from 'lucide-react';

interface WelcomePageProps {
  onStart: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-orange-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Évaluation de la Santé Financière
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Découvrez la santé financière de votre entreprise en quelques minutes
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Clock className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">20 questions en 4 sections</h3>
              <p className="text-gray-600 text-sm">
                Gestion de trésorerie, budget & planification, fiscalité, et systèmes financiers
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">100% sécurisé et confidentiel</h3>
              <p className="text-gray-600 text-sm">
                Aucun détail financier spécifique (chiffres de revenus, montants) ne vous sera demandé
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onStart}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors text-lg"
        >
          Commencer
        </button>
      </div>
    </div>
  );
};