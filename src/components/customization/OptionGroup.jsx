const OptionGroup = ({title, children}) => {
  return (
    <section className="space-y-4 rounded-2xl border border-zinc-200 p-5">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      {children}

    </section>
  );
};

export default OptionGroup;