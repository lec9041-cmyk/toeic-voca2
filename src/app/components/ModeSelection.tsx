import { Link } from "react-router";
import { CreditCard, FileText, RotateCcw, ChevronLeft } from "lucide-react";

export function ModeSelection() {
  return (
    <div className="min-h-screen max-w-md mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mt-12 mb-8">
        <Link to="/">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold">학습 모드 선택</h1>
      </div>

      {/* Mode Cards */}
      <div className="space-y-4">
        <Link to="/flashcard">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-blue-500">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">플래시카드</h3>
                <p className="text-sm text-gray-600 mb-3">
                  카드를 넘기며 단어를 학습하세요
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    50개 단어
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    약 15분
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="bg-white rounded-2xl p-6 shadow-sm opacity-75 cursor-not-allowed">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">단어 시험</h3>
              <p className="text-sm text-gray-600 mb-3">
                객관식 문제로 실력을 테스트하세요
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                  20문제
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  약 10분
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm opacity-75 cursor-not-allowed">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <RotateCcw className="w-7 h-7 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">오답 복습</h3>
              <p className="text-sm text-gray-600 mb-3">
                틀렸던 단어를 다시 복습하세요
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
                  12개 단어
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  약 5분
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 rounded-xl p-4">
        <p className="text-sm text-blue-900">
          💡 <span className="font-semibold">팁:</span> 매일 플래시카드로 학습하고, 주말에 단어 시험으로 복습하세요!
        </p>
      </div>
    </div>
  );
}
