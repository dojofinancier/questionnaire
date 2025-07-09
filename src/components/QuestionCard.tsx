import React from 'react';
import { Question } from '../types/questionnaire';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-900 leading-relaxed">
          {question.text}
        </h3>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option.value)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left group hover:border-orange-300 ${
              selectedAnswer === option.value
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-medium pr-4">
                {option.label}
              </span>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedAnswer === option.value
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300 group-hover:border-orange-300'
              }`}>
                {selectedAnswer === option.value && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};