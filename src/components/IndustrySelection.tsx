import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface IndustrySelectionProps {
  onIndustrySubmit: (industry: string) => void;
}

const industries = [
  "Services professionnels (consultation, comptabilité, juridique)",
  "Commerce de détail",
  "Restauration et hôtellerie",
  "Construction et rénovation",
  "Technologie et informatique",
  "Santé et services médicaux",
  "Arts, culture et divertissement"
];

export const IndustrySelection: React.FC<IndustrySelectionProps> = ({
  onIndustrySubmit
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [otherIndustry, setOtherIndustry] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedIndustry) {
      setError('Veuillez sélectionner votre secteur d\'activité');
      return;
    }
    
    if (selectedIndustry === 'Autre' && !otherIndustry.trim()) {
      setError('Veuillez préciser votre secteur d\'activité');
      return;
    }
    
    setError('');
    const finalIndustry = selectedIndustry === 'Autre' ? otherIndustry.trim() : selectedIndustry;
    onIndustrySubmit(finalIndustry);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-8 h-8 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Votre secteur d'activité
        </h2>
        <p className="text-gray-600">
          Cette information nous permettra de personnaliser votre rapport
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          {industries.map((industry, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setSelectedIndustry(industry);
                setError('');
              }}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left group hover:border-orange-300 ${
                selectedIndustry === industry
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium pr-4">
                  {industry}
                </span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedIndustry === industry
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-gray-300 group-hover:border-orange-300'
                }`}>
                  {selectedIndustry === industry && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
              </div>
            </button>
          ))}
          
          <button
            type="button"
            onClick={() => {
              setSelectedIndustry('Autre');
              setError('');
            }}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left group hover:border-orange-300 ${
              selectedIndustry === 'Autre'
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-medium pr-4">
                Autre
              </span>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedIndustry === 'Autre'
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300 group-hover:border-orange-300'
              }`}>
                {selectedIndustry === 'Autre' && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </button>
        </div>

        {selectedIndustry === 'Autre' && (
          <div className="mt-4">
            <input
              type="text"
              value={otherIndustry}
              onChange={(e) => setOtherIndustry(e.target.value)}
              placeholder="Précisez votre secteur d'activité"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
        )}

        {error && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Continuer
          </button>
        </div>
      </form>
    </div>
  );
};