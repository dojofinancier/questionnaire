import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { WelcomePage } from './components/WelcomePage';
import { IndustrySelection } from './components/IndustrySelection';
import { EmailCollection } from './components/EmailCollection';
import { ThankYouMessage } from './components/ThankYouMessage';
import { AlreadySubmittedMessage } from './components/AlreadySubmittedMessage';
import { useQuestionnaire } from './hooks/useQuestionnaire';
import { questionnaireData } from './data/questionnaire';

function App() {
  const {
    isStarted,
    currentQuestionIndex,
    currentQuestion,
    currentSection,
    answers,
    showIndustrySelection,
    isCompleted,
    isSubmitted,
    isSubmitting,
    hasAlreadySubmitted,
    questions,
    handleStart,
    handleAnswerSelect,
    handleIndustrySubmit,
    handleEmailSubmit
  } = useQuestionnaire();

  // Check if user has already submitted
  if (hasAlreadySubmitted) {
    return (
      <div className="min-h-screen bg-orange-50">
        <AlreadySubmittedMessage />
      </div>
    );
  }

  // Show thank you message after submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-orange-50">
        <ThankYouMessage />
      </div>
    );
  }

  // Show welcome page if not started
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-orange-50">
        <WelcomePage onStart={handleStart} />
      </div>
    );
  }

  // Show industry selection after completing all questions
  if (showIndustrySelection) {
    return (
      <div className="min-h-screen bg-orange-50">
        <div className="w-full bg-white border-b border-gray-200 px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full w-full" />
            </div>
          </div>
        </div>
        <IndustrySelection onIndustrySubmit={handleIndustrySubmit} />
      </div>
    );
  }

  // Show email collection after completing all questions
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-orange-50">
        <div className="w-full bg-white border-b border-gray-200 px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full w-full" />
            </div>
          </div>
        </div>
        <EmailCollection 
          onEmailSubmit={handleEmailSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <ProgressBar
        sections={questionnaireData.sections}
        currentSection={currentSection}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
      
      <div className="py-8">
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id] || null}
          onAnswerSelect={handleAnswerSelect}
        />
      </div>
    </div>
  );
}

export default App;