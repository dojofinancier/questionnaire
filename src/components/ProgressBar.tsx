import React from 'react';
import { QuestionnaireSection } from '../types/questionnaire';

interface ProgressBarProps {
  sections: QuestionnaireSection[];
  currentSection: number;
  currentQuestionIndex: number;
  totalQuestions: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  sections,
  currentSection,
  currentQuestionIndex,
  totalQuestions
}) => {
  const currentSectionData = sections.find(s => s.id === currentSection);
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full bg-white border-b border-gray-200 px-4 py-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        
        {/* Section info */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Section {currentSection}: {currentSectionData?.title}
          </h2>
          {currentSectionData?.subtitle && (
            <p className="text-sm text-gray-600 mb-2">
              {currentSectionData.subtitle}
            </p>
          )}
          <p className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} sur {totalQuestions}
          </p>
        </div>
      </div>
    </div>
  );
};