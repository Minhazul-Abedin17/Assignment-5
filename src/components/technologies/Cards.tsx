import { use, useState } from "react";
import { toast } from "react-toastify";
import AvailableCard from "./AvailableCard";
import SelectedCard from "./SelectedCard";
import type { Itech } from "../../type/cardType";

interface ICardProps {
  cardPromise: Promise<Itech[]>;
}

const Cards = ({ cardPromise }: ICardProps) => {
  const technologies = use(cardPromise);
  const [selectedTech, setSelectedTech] = useState<Itech[]>([]);
  const handleAdd = (technology: Itech) => {
    const alreadySelected = selectedTech.some(
      (item) => item.id === technology.id,
    );

    if (alreadySelected) {
      return;
    }

    setSelectedTech((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: number) => {
    setSelectedTech((previous) =>
      previous.filter((technology) => technology.id !== id),
    );
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-slate-500">
          Pick technologies to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((item) => (
              <AvailableCard
                key={item.id}
                technology={item}
                onAdd={handleAdd}
                isSelected={selectedTech.some(
                  (selected) => selected.id === item.id,
                )}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-800">Your Stack</h2>
              <p className="text-sm text-slate-500">
                {selectedTech.length} Selected
              </p>
            </div>
            <div className="space-y-3">
              {selectedTech.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
                  <p className="text-sm text-slate-500">Your stack is empty.</p>
                </div>
              ) : (
                selectedTech.map((item) => (
                  <SelectedCard
                    key={item.id}
                    technology={item}
                    onRemove={handleRemove}
                  />
                ))
              )}
            </div>
            {selectedTech.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="mt-4 w-full rounded-lg border border-pink-200 bg-white py-2.5 text-sm font-semibold text-pink-500 transition hover:bg-pink-50"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
