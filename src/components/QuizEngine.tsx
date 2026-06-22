import React, { useState, useEffect } from 'react';

type Question = {
  question: string;
  options: any[]; // Changed from string[] to any[] to safely capture both formats
  correctAnswer: number;
}

type Props = {
  questions: Question[];
  onQuizComplete?: (finalScore: number, totalQuestions: number) => void;
}

export default function QuizEngine({ questions, onQuizComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [runningScore, setRunningScore] = useState(0);
  const [showScoreSummary, setShowScoreSummary] = useState(false);
  const [selectedMappingIdx, setSelectedMappingIdx] = useState<number | null>(null);
  const [isLockedAnswer, setIsLockedAnswer] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setRunningScore(0);
    setShowScoreSummary(false);
    setSelectedMappingIdx(null);
    setIsLockedAnswer(false);
  }, [questions]);

  const activeQuestion = questions[currentIndex];

  const handleSelectionProcess = (choiceIdx: number) => {
    if (isLockedAnswer) return;
    setSelectedMappingIdx(choiceIdx);
  };

  const handleVerifySubmission = () => {
    if (selectedMappingIdx === null || isLockedAnswer || !activeQuestion) return;

    // 🌟 EXTRA DEFENSIVE DETECTOR: Handles both standard numeric indices and object array answers
    let correct = selectedMappingIdx === activeQuestion.correctAnswer;
    
    // If your dataset relies on { text, correct: true } objects inside options instead of an index property:
    const chosenOption = activeQuestion.options[selectedMappingIdx];
    if (chosenOption && typeof chosenOption === 'object' && 'correct' in chosenOption) {
      correct = chosenOption.correct === true;
    }

    const nextScore = correct ? runningScore + 1 : runningScore;
    
    if (correct) {
      setRunningScore(nextScore);
    }
    
    setIsLockedAnswer(true);

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setSelectedMappingIdx(null);
        setIsLockedAnswer(false);
      } else {
        setShowScoreSummary(true);
        if (onQuizComplete) {
          onQuizComplete(nextScore, questions.length);
        }
      }
    }, 1200);
  };

  if (!activeQuestion) return null;

  if (showScoreSummary) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem', color: '#fff' }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#56d364' }}>Evaluation Sequence Terminated ✓</h4>
        <p style={{ color: '#8b949e', margin: '0 0 1rem 0' }}>Your score details matching performance loops synced upstream to secure servers.</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
          {runningScore} / <span style={{ color: '#64748b' }}>{questions.length}</span>
        </div>
        <span style={{ fontSize: '0.85rem', color: '#38bdf8', marginTop: '0.5rem', display: 'block', fontWeight: 600 }}>
          +{runningScore * 10} XP Compound Conceptual Momentum Added
        </span>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8b949e', fontSize: '0.8rem', fontWeight: 600 }}>
        <span>QUESTION {currentIndex + 1} OF {questions.length}</span>
        <span>ACCURACY ACCUMULATOR: {currentIndex === 0 ? 100 : Math.round((runningScore / currentIndex) * 100)}%</span>
      </div>

      <h4 style={{ fontSize: '1.1rem', color: '#fff', margin: '0 0 0.5rem 0', fontWeight: 600, lineHeight: '1.4' }}>
        {activeQuestion.question}
      </h4>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {activeQuestion.options.map((option, idx) => {
          const isChosen = selectedMappingIdx === idx;
          
          // Determine the correct answer reference securely for style glowing triggers
          let isCurrentOptionCorrect = idx === activeQuestion.correctAnswer;
          if (option && typeof option === 'object' && 'correct' in option) {
            isCurrentOptionCorrect = option.correct === true;
          }

          const showSuccessGlow = isLockedAnswer && isCurrentOptionCorrect;
          const showFailureGlow = isLockedAnswer && isChosen && !isCurrentOptionCorrect;

          // 🌟 THE OVERLAP RESOLVER: Safely unpacks the text layout whether it's a primitive string or data object
          const optionTextDisplay = option && typeof option === 'object' ? option.text : option;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectionProcess(idx)}
              disabled={isLockedAnswer}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1.15rem 1.25rem',
                borderRadius: '12px',
                fontSize: '0.9rem',
                lineHeight: '1.4',
                cursor: isLockedAnswer ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s ease',
                background: showSuccessGlow ? 'rgba(46, 160, 67, 0.1)' : showFailureGlow ? 'rgba(248, 81, 73, 0.1)' : isChosen ? 'rgba(56, 189, 248, 0.03)' : '#161b22',
                border: `1px solid ${showSuccessGlow ? '#2ea043' : showFailureGlow ? '#f85149' : isChosen ? '#38bdf8' : '#30363d'}`,
                color: showSuccessGlow ? '#56d364' : showFailureGlow ? '#f85149' : '#c9d1d9',
                fontWeight: isChosen || showSuccessGlow ? 600 : 500
              }}
            >
              {optionTextDisplay}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleVerifySubmission}
        disabled={selectedMappingIdx === null || isLockedAnswer}
        style={{
          marginTop: '0.5rem',
          padding: '0.75rem',
          borderRadius: '8px',
          background: selectedMappingIdx === null || isLockedAnswer ? '#21262d' : '#2ea043',
          color: selectedMappingIdx === null || isLockedAnswer ? '#8b949e' : '#fff',
          border: 'none',
          fontWeight: 600,
          cursor: selectedMappingIdx === null || isLockedAnswer ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease'
        }}
      >
        {isLockedAnswer ? 'Verifying Context Matrix...' : 'Submit Choice Answer'}
      </button>
    </div>
  );
}