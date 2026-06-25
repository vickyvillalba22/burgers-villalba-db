const OptionGroup = ({title, children}) => {
  return (
    <section className="space-y-4 rounded-2xl">

      <p className="text-md font-semibold">
        {title}
      </p>

      {children}

    </section>
  );
};

export default OptionGroup;