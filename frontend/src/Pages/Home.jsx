import React from 'react';

function Home() {
  const providers = [
    { name: 'Singtel', img: 'singtel-logo.png' },
    { name: 'TPG Telecom', img: 'tpg-logo.png' },
    { name: 'Circles.Life', img: 'circles-life-logo.png' },
    { name: 'M1', img: 'm1-logo.png' },
    { name: 'StarHub', img: 'starhub-logo.png' },
    { name: 'MyRepublic', img: 'myrepublic-logo.png' },
  ];

  const specialProviders = [
    { name: 'Singtel', img: 'singtel-logo.png' },
    { name: 'StarHub', img: 'starhub-logo.png' },
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className=" bg-blue-500 text-white py-3">
          <div className="container flex justify-center items-center ml-36">
            <span className="text-lg font-bold">Select Service Provider</span>
          </div>
        </div>
        <div className="bg-yellow-400 text-center py-2">
          <p className="mb-0">Dear customer, please recheck numbers twice before recharging.</p>
        </div>
      </header>

      {/* Body */}
      <div className="container mx-auto my-8">
        <h5 className="text-center mb-6 text-lg font-medium">Available Service Providers</h5>
        <div className="flex flex-wrap justify-center">
          {/* Loop through providers */}
          {providers.map((provider, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-3" key={index}>
              <div className="card text-center shadow-md bg-white rounded-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="card-body p-4">
                  <img src={`/images/${provider.img}`} alt={provider.name} className="mx-auto mb-4 w-16 h-16" />
                  <h6 className="font-semibold text-sm">{provider.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Recharge Networks */}
        <h5 className="text-center mt-10 text-lg font-bold text-red-500">Special Recharge Networks (Margin Low)</h5>
        <div className="flex flex-wrap justify-center mt-4">
          {specialProviders.map((provider, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 p-3" key={index}>
              <div className="card text-center shadow-md bg-white rounded-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="card-body p-4">
                  <img src={`/images/${provider.img}`} alt={provider.name} className="mx-auto mb-4 w-16 h-16" />
                  <h6 className="font-semibold text-sm">{provider.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
