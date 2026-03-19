import { Link } from "react-router";
import { ChevronLeft, Flame, Target, TrendingUp, Calendar, Clock, BookOpen } from "lucide-react";

export function Stats() {
  const weeklyData = [
    { day: "월", count: 45 },
    { day: "화", count: 32 },
    { day: "수", count: 50 },
    { day: "목", count: 38 },
    { day: "금", count: 42 },
    { day: "토", count: 28 },
    { day: "일", count: 35 },
  ];

  const maxCount = Math.max(...weeklyData.map(d => d.count));

  return (
    <div className="min-h-screen max-w-md mx-auto p-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mt-12 mb-8">
        <Link to="/">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold">학습 통계</h1>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 text-white">
          <Flame className="w-8 h-8 mb-2" />
          <div className="text-3xl font-bold mb-1">7일</div>
          <div className="text-sm opacity-90">연속 학습일</div>
          <div className="text-xs opacity-75 mt-2">최고: 12일</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-5 text-white">
          <Target className="w-8 h-8 mb-2" />
          <div className="text-3xl font-bold mb-1">1,250</div>
          <div className="text-sm opacity-90">총 XP</div>
          <div className="text-xs opacity-75 mt-2">레벨 5</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white">
          <BookOpen className="w-8 h-8 mb-2" />
          <div className="text-3xl font-bold mb-1">324</div>
          <div className="text-sm opacity-90">학습한 단어</div>
          <div className="text-xs opacity-75 mt-2">이번 주: 85개</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-5 text-white">
          <TrendingUp className="w-8 h-8 mb-2" />
          <div className="text-3xl font-bold mb-1">78%</div>
          <div className="text-sm opacity-90">평균 암기율</div>
          <div className="text-xs opacity-75 mt-2">+5% 상승</div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">이번 주 활동</h2>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {weeklyData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="flex-1 flex items-end w-full">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${(item.count / maxCount) * 100}%` }}
                />
              </div>
              <div className="text-xs text-gray-600 font-medium">{item.day}</div>
              <div className="text-xs text-gray-400">{item.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">학습 기록</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold">총 학습 시간</div>
                <div className="text-sm text-gray-500">이번 주</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold">3시간 45분</div>
              <div className="text-xs text-green-600">+30분 ↑</div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold">목표 달성률</div>
                  <div className="text-sm text-gray-500">이번 주</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">6 / 7일</div>
                <div className="text-xs text-green-600">86%</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">복습 필요 단어</div>
                  <div className="text-sm text-gray-500">암기율 50% 이하</div>
                </div>
              </div>
              <div className="text-xl font-bold">12개</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
