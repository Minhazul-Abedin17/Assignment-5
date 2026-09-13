import type { Itech } from "../../type/cardType";

interface IAvailableCardProps {
  technology: Itech;
  onAdd: (technology: Itech) => void;
  isSelected: boolean;
}

const AvailableCard = ({
  technology,
  onAdd,
  isSelected,
}: IAvailableCardProps) => {
  return (
    <div>
      <div
        className={`min-h-[380px] rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
          isSelected
            ? "border-pink-300 ring-1 ring-pink-200"
            : "border-slate-200"
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-11 w-11 object-contain"
            />
          </div>
          <p className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-500">
            {technology.badge}
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-slate-900">
            {technology.name}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
            {technology.description}
          </p>
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-slate-100 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              {technology.category}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              {technology.difficulty}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              ⭐{technology.rating}
            </p>
          </div>
        </div>
        <button
          disabled={isSelected}
          onClick={() => onAdd(technology)}
          className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 ${
            isSelected
              ? "cursor-not-allowed bg-pink-100 text-pink-600"
              : "bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.98]"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};
export default AvailableCard;
