const OptionGroup = ({title, children}) => {
  return (
    <section className="flex items-center gap-4 w-fit">

      <p className="text-md font-semibold">
        {title}
      </p>

      {children}

    </section>
  );
};

export default OptionGroup;