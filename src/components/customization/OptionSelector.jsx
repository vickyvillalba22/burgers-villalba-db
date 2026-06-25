const OptionSelector = ({options, value, onChange, type = "radio"}) => {
  return (
    <div className="flex flex-wrap gap-3">

      {options.map((option) => {

        const isSelected =
          type === "radio"
            ? value === option.value
            : Array.isArray(value) && value.includes(option.value);

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 transition cursor-pointer text-[14px] ${
              isSelected
                ? "border-black bg-black text-white"
                : "border-zinc-300"
            }`}
          >
            {option.label}
          </button>
        );
      })}

    </div>
  );
};

export default OptionSelector;