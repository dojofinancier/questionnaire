import { useState, useEffect } from 'react';
import { AnswerData, SubmissionData } from '../types/questionnaire';
import { questionnaireData } from '../data/questionnaire';

export const useQuestionnaire = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerData>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showIndustrySelection, setShowIndustrySelection] = useState(false);
  const [industry, setIndustry] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAlreadySubmitted, setHasAlreadySubmitted] = useState(false);

  const questions = questionnaireData.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const currentSection = currentQuestion?.section || 1;

  useEffect(() => {
    // Check if user has already submitted
    const submitted = localStorage.getItem('questionnaire-submitted');
    if (submitted) {
      setHasAlreadySubmitted(true);
    }
  }, []);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answer
    };
    setAnswers(newAnswers);

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowIndustrySelection(true);
      }
    }, 300);
  };

  const handleIndustrySubmit = (selectedIndustry: string) => {
    setIndustry(selectedIndustry);
    setShowIndustrySelection(false);
    setIsCompleted(true);
  };

  const handleEmailSubmit = async (email: string) => {
    setIsSubmitting(true);
    
    try {
      const submissionData: SubmissionData = {
        ...answers,
        industry,
        email,
        timestamp: new Date().toISOString()
      };

      // Replace with your actual webhook URL
      const webhookUrl = 'https://hook.us1.make.com/ckzqpgwha4iw7bavpr2ubkkmzl88nxu2';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Mark as submitted to prevent duplicate submissions
      localStorage.setItem('questionnaire-submitted', 'true');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      // In a real app, you might want to show an error message to the user
      // For now, we'll still mark as submitted to prevent retries
      localStorage.setItem('questionnaire-submitted', 'true');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuestionnaire = () => {
    setIsStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowIndustrySelection(false);
    setIndustry('');
    setIsCompleted(false);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setHasAlreadySubmitted(false);
    localStorage.removeItem('questionnaire-submitted');
  };

  return {
    isStarted,
    currentQuestionIndex,
    currentQuestion,
    currentSection,
    answers,
    showIndustrySelection,
    industry,
    isCompleted,
    isSubmitted,
    isSubmitting,
    hasAlreadySubmitted,
    questions,
    handleStart,
    handleAnswerSelect,
    handleIndustrySubmit,
    handleEmailSubmit,
    resetQuestionnaire
  };
};