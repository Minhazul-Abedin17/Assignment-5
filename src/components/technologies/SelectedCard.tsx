import type { Itech } from "../../type/cardType";

interface ISelectedCardProps {
  technology: Itech;
  onRemove: (id: number) => void;
}

const SelectedCard = ({
  technology,
  onRemove,
}: ISelectedCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-8 w-8 object-contain"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-slate-800">
          {technology.name}
        </h3>
        <p className="text-xs text-slate-500">
          {technology.category}
        </p>
      </div>
      <button
        onClick={() => onRemove(technology.id)}
        className="text-xl text-slate-400 transition hover:text-pink-500"
      >
        x
      </button>
    </div>
  );
};
export default SelectedCard;