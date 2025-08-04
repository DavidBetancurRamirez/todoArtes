interface LoaderProps {
  isShown?: boolean;
}

const Loader = ({ isShown = true }: LoaderProps) => {
  if (!isShown) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
