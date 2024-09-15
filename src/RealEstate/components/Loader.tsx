import { TailSpin } from 'react-loader-spinner';

function Loader() {
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50 backdrop-blur-sm">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="loading"
        />
    </div>
    );
  }
  export default Loader;
  