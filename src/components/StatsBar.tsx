import { FACTS_DB, CATEGORIES } from "../data/facts";

export default function StatsBar() {
  const totalFacts = FACTS_DB.length;
  const totalCategories = CATEGORIES.length - 1; // exclude "all"

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📚</span>
        <div>
          <p className="text-2xl font-bold text-gray-800">{totalFacts}+</p>
          <p className="text-xs text-gray-500 font-medium">ciekawostek</p>
        </div>
      </div>
      <div className="w-px h-10 bg-gray-200 hidden sm:block" />
      <div className="flex items-center gap-2">
        <span className="text-2xl">🏷️</span>
        <div>
          <p className="text-2xl font-bold text-gray-800">{totalCategories}</p>
          <p className="text-xs text-gray-500 font-medium">kategorii</p>
        </div>
      </div>
      <div className="w-px h-10 bg-gray-200 hidden sm:block" />
      <div className="flex items-center gap-2">
        <span className="text-2xl">🌍</span>
        <div>
          <p className="text-2xl font-bold text-gray-800">∞</p>
          <p className="text-xs text-gray-500 font-medium">mozliwosci</p>
        </div>
      </div>
    </div>
  );
}
