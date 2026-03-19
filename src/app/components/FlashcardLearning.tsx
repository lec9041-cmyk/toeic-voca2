import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, X, Check } from "lucide-react";

const flashcards = [
  { word: "abundant", meaning: "풍부한, 많은", example: "abundant resources" },
  { word: "acquire", meaning: "획득하다, 취득하다", example: "acquire new skills" },
  { word: "adequate", meaning: "적절한, 충분한", example: "adequate preparation" },
  { word: "analyze", meaning: "분석하다", example: "analyze data" },
  { word: "approach", meaning: "접근하다, 방법", example: "new approach" },
  { word: "benefit", meaning: "이익, 혜택", example: "health benefits" },
  { word: "category", meaning: "범주, 부류", example: "product category" },
  { word: "component", meaning: "구성요소, 부품", example: "key component" },
];

export function FlashcardLearning() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [unknownCount, setUnknownCount] = useState(0);

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  const handleNext = (known: boolean) => {
    if (known) {
      setKnownCount(knownCount + 1);
    } else {
      setUnknownCount(unknownCount + 1);
    }

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const isComplete = currentIndex === flashcards.length - 1 && (knownCount + unknownCount === flashcards.length);

  if (isComplete) {
    return (
      <div className="min-h-screen max-w-md mx-auto p-6 flex flex-col items-center justify-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-bold mb-4">학습 완료!</h2>
        <div className="bg-white rounded-2xl p-6 w-full shadow-lg mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{knownCount}</div>
              <div className="text-sm text-gray-600">알아요</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{unknownCount}</div>
              <div className="text-sm text-gray-600">몰라요</div>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 mb-1">암기율</div>
            <div className="text-2xl font-bold text-blue-600">
              {Math.round((knownCount / flashcards.length) * 100)}%
            </div>
          </div>
        </div>
        <div className="space-y-3 w-full">
          <Link to="/" className="block">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl py-4 font-semibold">
              홈으로 돌아가기
            </button>
          </Link>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setIsFlipped(false);
              setKnownCount(0);
              setUnknownCount(0);
            }}
            className="w-full bg-white text-gray-700 rounded-xl py-4 font-semibold border-2 border-gray-200"
          >
            다시 학습하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-md mx-auto p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mt-12 mb-6">
        <Link to="/mode">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </Link>
        <div className="text-sm font-semibold text-gray-600">
          {currentIndex + 1} / {flashcards.length}
        </div>
        <Link to="/">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-8">
        <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
          <Check className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-700">{knownCount}</span>
        </div>
        <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-lg">
          <X className="w-5 h-5 text-red-600" />
          <span className="font-semibold text-red-700">{unknownCount}</span>
        </div>
      </div>

      {/* Flashcard */}
      <div className="flex-1 flex items-center justify-center mb-8">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full bg-white rounded-3xl shadow-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-3xl min-h-[400px] flex flex-col items-center justify-center"
        >
          {!isFlipped ? (
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-6">
                {currentCard.word}
              </div>
              <div className="text-sm text-gray-400 italic">
                {currentCard.example}
              </div>
              <div className="mt-8 text-sm text-gray-500">
                탭하여 뜻 보기
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-4xl text-gray-400 mb-6">
                {currentCard.word}
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                {currentCard.meaning}
              </div>
              <div className="text-base text-gray-600 italic">
                {currentCard.example}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleNext(false)}
          className="bg-white border-2 border-red-300 text-red-600 rounded-xl py-5 font-semibold hover:bg-red-50 transition-all disabled:opacity-50"
          disabled={!isFlipped}
        >
          <X className="w-6 h-6 mx-auto mb-1" />
          몰라요
        </button>
        <button
          onClick={() => handleNext(true)}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl py-5 font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          disabled={!isFlipped}
        >
          <Check className="w-6 h-6 mx-auto mb-1" />
          알아요
        </button>
      </div>
    </div>
  );
}
