import { useState } from "react";
import { Fact, CATEGORIES } from "../data/facts";

interface FactEditorProps {
  onSave: (fact: Fact) => void;
  onClose: () => void;
}

export default function FactEditor({ onSave, onClose }: FactEditorProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("history");
  const [emoji, setEmoji] = useState("✨");

  const handleSave = () => {
    if (!text.trim()) return;
    onSave({
      id: `custom-${Date.now()}`,
      text: text.trim(),
      category,
      emoji: emoji.trim() || "✨",
    });
    onClose();
  };

  const realCategories = CATEGORIES.filter((c) => c.id !== "all");

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 bg-gradient-to-r from-violet-500 to-purple-600" />
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-gray-900">✏️ Dodaj własną ciekawostkę</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none font-light"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Treść ciekawostki *
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Wpisz swoją ciekawostkę..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-400 focus:outline-none text-gray-800 text-base resize-none transition-colors"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">{text.length} znaków</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Kategoria
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-400 focus:outline-none text-gray-800 text-base bg-white transition-colors"
                >
                  {realCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.emoji} {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Emoji
                </label>
                <input
                  value={emoji}
                  onChange={(e) => setEmoji(e.target.value)}
                  placeholder="✨"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-400 focus:outline-none text-gray-800 text-base text-center text-2xl transition-colors"
                  maxLength={2}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Anuluj
            </button>
            <button
              onClick={handleSave}
              disabled={!text.trim()}
              className="flex-1 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-violet-500 to-purple-600 shadow-md hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Zapisz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
