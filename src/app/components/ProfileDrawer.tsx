import { useState } from "react";
import { Menu, X, Settings, Trophy, Star } from "lucide-react";

export function ProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-6 p-1 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Profile Info */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="text-white">
                <div className="text-sm opacity-90">닉네임</div>
                <div className="text-xl font-bold">TOEIC마스터</div>
              </div>
            </div>

            {/* Title and Level */}
            <div className="flex gap-2 mb-2">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                <Trophy className="w-4 h-4" />
                초급 학습자
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold">레벨 5</span>
              <span className="text-sm opacity-90 ml-2">XP 1,250 / 2,000</span>
            </div>
            <div className="mt-2 bg-white/30 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full w-[62.5%]" />
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-4">
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 rounded-lg transition-colors">
                <Trophy className="w-5 h-5 text-gray-600" />
                <span>업적</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 rounded-lg transition-colors">
                <Star className="w-5 h-5 text-gray-600" />
                <span>칭호 변경</span>
              </button>
              <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
                <span>설정</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
            <div>가입일: 2026.01.15</div>
            <div>총 학습 시간: 12시간 30분</div>
          </div>
        </div>
      </div>
    </>
  );
}
