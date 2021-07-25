export const HomePageSection: React.FC = ({ children }) => {
  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5">{children}</div>
    </div>
  );
};
