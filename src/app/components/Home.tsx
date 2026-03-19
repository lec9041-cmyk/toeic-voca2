import { Link } from "react-router";
import { Star, Flame, Target, TrendingUp } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen max-w-md mx-auto p-6 pb-24">
      {/* Header with Level and XP */}
      <div className="mt-12 mb-8">
        <h1 className="text-3xl font-bold mb-6">TOEIC 단어장</h1>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="text-lg font-semibold">레벨 5</span>
            </div>
            <span className="text-sm text-gray-600">1,250 / 2,000 XP</span>
          </div>
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full w-[62.5%]" />
          </div>
        </div>
      </div>

      {/* Today's Progress */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">오늘 진행</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600">학습한 단어</span>
            </div>
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-gray-500 mt-1">목표: 50개</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-gray-600">연속 학습</span>
            </div>
            <div className="text-2xl font-bold">7일</div>
            <div className="text-xs text-gray-500 mt-1">최고 기록: 12일</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600">암기율</span>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-2xl font-bold">78%</div>
              <div className="text-sm text-green-600 mb-1">+5% ↑</div>
            </div>
            <div className="bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
              <div className="bg-green-500 h-full w-[78%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Start Learning Button */}
      <Link to="/mode">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
          암기 시작
        </button>
      </Link>

      {/* Quick Stats Link */}
      <Link to="/stats">
        <button className="w-full mt-4 bg-white text-gray-700 rounded-2xl py-4 font-semibold shadow-sm hover:shadow-md transition-all">
          학습 통계 보기
        </button>
      </Link>
    </div>
  );
}
