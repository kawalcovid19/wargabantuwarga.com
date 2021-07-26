export const HomePageSection: React.FC = ({ children }) => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="px-4 py-5">{children}</div>
    </section>
  );
};
