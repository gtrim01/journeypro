import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selectedRegion, setSelectedRegion] = useState('australia')
  const [selectedVehicleType, setSelectedVehicleType] = useState('')
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [towingWeight, setTowingWeight] = useState(0)
  const [passengers, setPassengers] = useState(1)
  const [luggageLevel, setLuggageLevel] = useState('light')
  const [distance, setDistance] = useState(500)
  const [fromLocation, setFromLocation] = useState('')
  const [toLocation, setToLocation] = useState('')
  const [showRegionDropdown, setShowRegionDropdown] = useState(false)
  const [showVehicleDropdown, setShowVehicleDropdown] = useState(false)
  const [showMakeDropdown, setShowMakeDropdown] = useState(false)
  const [showModelDropdown, setShowModelDropdown] = useState(false)

  const regions = [
    { code: 'australia', name: 'Australia', flag: '🇦🇺' },
    { code: 'usa', name: 'United States', flag: '🇺🇸' },
    { code: 'europe', name: 'Europe', flag: '🇪🇺' },
    { code: 'newzealand', name: 'New Zealand', flag: '🇳🇿' },
    { code: 'japan', name: 'Japan', flag: '🇯🇵' },
    { code: 'singapore', name: 'Singapore', flag: '🇸🇬' },
    { code: 'southkorea', name: 'South Korea', flag: '🇰🇷' }
  ]

  const vehicleTypes = ['Motorcycles', 'Cars', 'SUVs', 'Motorhomes']

  const vehicleDatabase = {
    'Motorcycles': {
      'BMW': ['R1250GS', 'R1300GS', 'F850GS', 'F750GS', 'R1250RT', 'K1600GT'],
      'KTM': ['1290 Super Adventure', '890 Adventure', '790 Adventure', '390 Adventure'],
      'Honda': ['Africa Twin', 'Gold Wing', 'CB500X', 'NC750X'],
      'Ducati': ['Multistrada V4', 'Multistrada 950', 'Desert X'],
      'Yamaha': ['Tenere 700', 'Super Tenere', 'Tracer 900', 'FJR1300'],
      'Triumph': ['Tiger 900', 'Tiger 1200', 'Speed Triple'],
      'Kawasaki': ['Versys 1000', 'Versys 650', 'Ninja 1000SX'],
      'Suzuki': ['V-Strom 1050', 'V-Strom 650', 'GSX-S1000GT'],
      'Harley-Davidson': ['Pan America', 'Street Glide', 'Road King'],
      'Indian': ['FTR 1200', 'Scout', 'Chieftain']
    },
    'Cars': {
      'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'i4', 'iX3'],
      'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE', 'EQC', 'EQS'],
      'Audi': ['A4', 'A6', 'Q5', 'Q7', 'e-tron', 'e-tron GT'],
      'Volkswagen': ['Golf', 'Passat', 'Tiguan', 'Touareg', 'ID.4', 'ID.3'],
      'Toyota': ['Camry', 'RAV4', 'Highlander', 'Prius', 'Corolla'],
      'Honda': ['Accord', 'CR-V', 'Pilot', 'Civic', 'HR-V'],
      'Ford': ['Mustang', 'F-150', 'Explorer', 'Escape', 'Bronco'],
      'Chevrolet': ['Silverado', 'Tahoe', 'Equinox', 'Malibu', 'Corvette'],
      'Nissan': ['Altima', 'Rogue', 'Pathfinder', 'Sentra', 'Leaf'],
      'Hyundai': ['Sonata', 'Tucson', 'Santa Fe', 'Elantra', 'Ioniq 5']
    },
    'SUVs': {
      'BMW': ['X1', 'X3', 'X5', 'X7', 'iX'],
      'Mercedes-Benz': ['GLA', 'GLC', 'GLE', 'GLS', 'EQB'],
      'Audi': ['Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
      'Volkswagen': ['Tiguan', 'Atlas', 'Touareg', 'ID.4'],
      'Toyota': ['RAV4', 'Highlander', '4Runner', 'Sequoia', 'Land Cruiser'],
      'Honda': ['CR-V', 'Pilot', 'Passport', 'HR-V'],
      'Ford': ['Explorer', 'Expedition', 'Bronco', 'Escape', 'Edge'],
      'Chevrolet': ['Tahoe', 'Suburban', 'Traverse', 'Equinox'],
      'Jeep': ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass'],
      'Land Rover': ['Range Rover', 'Discovery', 'Defender', 'Evoque']
    },
    'Motorhomes': {
      'Winnebago': ['View', 'Navion', 'Revel', 'Travato'],
      'Thor': ['Ace', 'Vegas', 'Quantum', 'Palazzo'],
      'Forest River': ['Berkshire', 'Georgetown', 'FR3'],
      'Jayco': ['Precept', 'Alante', 'Greyhawk'],
      'Tiffin': ['Allegro', 'Phaeton', 'Wayfarer'],
      'Newmar': ['Bay Star', 'Canyon Star', 'Dutch Star'],
      'Coachmen': ['Mirada', 'Pursuit', 'Cross Trail'],
      'Fleetwood': ['Bounder', 'Discovery', 'Pace Arrow']
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedRegion)
  }, [selectedRegion])

  const handleRegionSelect = (region) => {
    setSelectedRegion(region)
    setShowRegionDropdown(false)
  }

  const handleVehicleTypeSelect = (type) => {
    setSelectedVehicleType(type)
    setSelectedMake('')
    setSelectedModel('')
    setShowVehicleDropdown(false)
  }

  const handleMakeSelect = (make) => {
    setSelectedMake(make)
    setSelectedModel('')
    setShowMakeDropdown(false)
  }

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    setShowModelDropdown(false)
  }

  const currentRegion = regions.find(r => r.code === selectedRegion)
  const availableMakes = selectedVehicleType ? Object.keys(vehicleDatabase[selectedVehicleType] || {}) : []
  const availableModels = selectedMake && selectedVehicleType ? vehicleDatabase[selectedVehicleType][selectedMake] || [] : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">JourneyPro</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              {/* Region Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <span>{currentRegion?.flag}</span>
                  <span>{currentRegion?.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showRegionDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border">
                    {regions.map((region) => (
                      <button
                        key={region.code}
                        onClick={() => handleRegionSelect(region.code)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                      >
                        <span>{region.flag}</span>
                        <span>{region.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Sign In
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Vehicle Touring Solution
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Fuel Calculator & Route Planner
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The only platform with accurate fuel calculations for motorcycles, cars, SUVs, motorhomes, and 
              towing combinations. Get precise costs with real-time pricing and vehicle-specific planning.
            </p>
          </div>

          {/* Main Calculator Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Route & Vehicle Selection Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Route & Vehicle Selection</h3>
              </div>

              <div className="space-y-4">
                {/* From/To Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        placeholder="Starting location"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        placeholder="Destination"
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                  <div className="relative">
                    <button
                      onClick={() => setShowVehicleDropdown(!showVehicleDropdown)}
                      className="w-full px-3 py-2 text-left border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white flex items-center justify-between"
                    >
                      <span className={selectedVehicleType ? 'text-gray-900' : 'text-gray-500'}>
                        {selectedVehicleType || 'Select vehicle type'}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {showVehicleDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {vehicleTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => handleVehicleTypeSelect(type)}
                            className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Make Selection */}
                {selectedVehicleType && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                    <div className="relative">
                      <button
                        onClick={() => setShowMakeDropdown(!showMakeDropdown)}
                        className="w-full px-3 py-2 text-left border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white flex items-center justify-between"
                      >
                        <span className={selectedMake ? 'text-gray-900' : 'text-gray-500'}>
                          {selectedMake || 'Select make'}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {showMakeDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                          {availableMakes.map((make) => (
                            <button
                              key={make}
                              onClick={() => handleMakeSelect(make)}
                              className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                            >
                              {make}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Model Selection */}
                {selectedMake && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                    <div className="relative">
                      <button
                        onClick={() => setShowModelDropdown(!showModelDropdown)}
                        className="w-full px-3 py-2 text-left border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white flex items-center justify-between"
                      >
                        <span className={selectedModel ? 'text-gray-900' : 'text-gray-500'}>
                          {selectedModel || 'Select model'}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {showModelDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                          {availableModels.map((model) => (
                            <button
                              key={model}
                              onClick={() => handleModelSelect(model)}
                              className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                            >
                              {model}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Distance Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Distance (km)</label>
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    placeholder="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Towing & Load Calculator Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Towing & Load Calculator</h3>
              </div>

              <div className="space-y-6">
                {/* Towing Weight Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Towing Weight: {towingWeight}kg
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="2500"
                      step="50"
                      value={towingWeight}
                      onChange={(e) => setTowingWeight(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0kg</span>
                      <span>2500kg</span>
                    </div>
                  </div>
                </div>

                {/* Passengers Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passengers: {passengers}
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="8"
                      step="1"
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1</span>
                      <span>8</span>
                    </div>
                  </div>
                </div>

                {/* Luggage Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Luggage Level: {luggageLevel.charAt(0).toUpperCase() + luggageLevel.slice(1)}
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="1"
                      value={luggageLevel === 'light' ? 0 : luggageLevel === 'medium' ? 1 : 2}
                      onChange={(e) => {
                        const levels = ['light', 'medium', 'maximum']
                        setLuggageLevel(levels[Number(e.target.value)])
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Light</span>
                      <span>Maximum</span>
                    </div>
                  </div>
                </div>

                {/* Fuel Impact Display */}
                {towingWeight > 0 && (
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">Fuel Impact</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Towing {towingWeight}kg will increase fuel consumption by approximately{' '}
                      <span className="font-semibold text-accent">
                        {Math.round(15 + (towingWeight / 2500) * 55)}%
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center mt-8">
            <button className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Plan Complete Journey
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Precise Fuel Costs</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/20">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Towing Calculator</span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/20">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium text-gray-700">80+ Vehicle Models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Vehicle Touring Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The only platform that provides accurate fuel calculations and vehicle-specific planning for 
              motorcycles, cars, SUVs, motorhomes, and towing combinations across all regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precise Fuel Calculations</h3>
              <p className="text-gray-600">
                Accurate fuel consumption data for 80+ vehicle models with real-time pricing and towing impact calculations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Towing Capability Calculator</h3>
              <p className="text-gray-600">
                Weight-based fuel impact calculations from 15-70% increase based on caravan and trailer specifications.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vehicle-Specific Planning</h3>
              <p className="text-gray-600">
                Tailored route planning for motorcycles, cars, SUVs, motorhomes, and towing combinations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Weather Intelligence</h3>
              <p className="text-gray-600">
                Real-time weather integration with predictive alerts and route adjustments for safe travel.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Adaptation</h3>
              <p className="text-gray-600">
                Local customs, language assistance, and cultural insights for confident international travel.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Monitoring</h3>
              <p className="text-gray-600">
                Comprehensive safety alerts, emergency contacts, and real-time risk assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Vehicle Coverage</h2>
            <p className="text-lg text-gray-600">
              Accurate fuel consumption data for 80+ vehicle models from major manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Motorcycles</h3>
              <p className="text-sm text-gray-600 mb-3">BMW, KTM, Honda, Ducati, Yamaha, Triumph</p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                Adventure & Touring
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cars</h3>
              <p className="text-sm text-gray-600 mb-3">BMW, Mercedes, Audi, Volkswagen</p>
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded-full">
                Petrol & Diesel
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SUVs</h3>
              <p className="text-sm text-gray-600 mb-3">Compact, Mid-size, Large SUVs</p>
              <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">
                All Major Brands
              </span>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Motorhomes</h3>
              <p className="text-sm text-gray-600 mb-3">Class A, B, C Motorhomes</p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                European Manufacturers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Vehicle Enthusiasts Worldwide</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The towing calculator saved me hundreds on my caravan trip. Knowing the exact fuel costs helped me budget perfectly!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">SC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Melbourne, Australia</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Finally, a fuel calculator that understands my BMW R1250GS. The motorcycle-specific features are incredible."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                  <p className="text-sm text-gray-600">Austin, USA</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Planning our motorhome tour across Europe was so easy with the vehicle-specific accommodation recommendations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">ET</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emma Thompson</p>
                  <p className="text-sm text-gray-600">London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Planning Your Perfect Journey</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of travelers who trust JourneyPro for accurate fuel calculations, 
            towing capabilities, and vehicle-specific planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
              Calculate Fuel Costs Now
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Free fuel calculator • No registration required • Instant results
          </p>
        </div>
      </section>
    </div>
  )
}

export default App

