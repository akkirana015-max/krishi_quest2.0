import React, { useState } from 'react';
import { Sprout, Users, TrendingUp, Calendar, Globe, User, LogOut, Menu, X, Leaf, Sun, Droplets, BarChart3 } from 'lucide-react';

// Language translations
const translations = {
  en: {
    title: "Krishi Quest 2.0",
    subtitle: "Empowering farmers with modern technology",
    smartPlanning: "Smart Planning",
    communitySupport: "Community Support",
    marketInsights: "Market Insights",
    eventCalendar: "Event Calendar",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    name: "Full Name",
    welcomeBack: "Welcome Back",
    createAccount: "Create Account",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    planningDescription: "AI-powered crop planning and resource optimization",
    communityDescription: "Connect with fellow farmers and agricultural experts",
    marketDescription: "Real-time market prices and trend analysis",
    calendarDescription: "Agricultural events and seasonal reminders",
    language: "Language",
    cropMonitoring: "Crop Monitoring",
    weatherForecast: "Weather Forecast",
    soilHealth: "Soil Health",
    yieldPrediction: "Yield Prediction",
    getStarted: "Get Started",
    learnMore: "Learn More",
    features: "Features",
    about: "About",
    contact: "Contact"
  },
  hi: {
    title: "कृषि क्वेस्ट 2.0",
    subtitle: "आधुनिक तकनीक के साथ किसानों को सशक्त बनाना",
    smartPlanning: "स्मार्ट योजना",
    communitySupport: "सामुदायिक सहायता",
    marketInsights: "बाजार अंतर्दृष्टि",
    eventCalendar: "कार्यक्रम कैलेंडर",
    login: "लॉगिन",
    signup: "साइन अप",
    logout: "लॉगआउट",
    email: "ईमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    name: "पूरा नाम",
    welcomeBack: "वापसी पर स्वागत है",
    createAccount: "खाता बनाएं",
    alreadyHaveAccount: "क्या आपका पहले से खाता है?",
    dontHaveAccount: "क्या आपका खाता नहीं है?",
    planningDescription: "AI-संचालित फसल योजना और संसाधन अनुकूलन",
    communityDescription: "साथी किसानों और कृषि विशेषज्ञों से जुड़ें",
    marketDescription: "वास्तविक समय बाजार मूल्य और प्रवृत्ति विश्लेषण",
    calendarDescription: "कृषि कार्यक्रम और मौसमी अनुस्मारक",
    language: "भाषा",
    cropMonitoring: "फसल निगरानी",
    weatherForecast: "मौसम पूर्वानुमान",
    soilHealth: "मिट्टी का स्वास्थ्य",
    yieldPrediction: "उत्पादन पूर्वानुमान",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    features: "विशेषताएं",
    about: "के बारे में",
    contact: "संपर्क"
  },
  bn: {
    title: "কৃষি ক্বেস্ট ২.০",
    subtitle: "আধুনিক প্রযুক্তির সাথে কৃষকদের ক্ষমতায়ন",
    smartPlanning: "স্মার্ট পরিকল্পনা",
    communitySupport: "সম্প্রদায়ের সহায়তা",
    marketInsights: "বাজার অন্তর্দৃষ্টি",
    eventCalendar: "ইভেন্ট ক্যালেন্ডার",
    login: "লগইন",
    signup: "সাইন আপ",
    logout: "লগআউট",
    email: "ইমেইল",
    password: "পাসওয়ার্ড",
    confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
    name: "পূর্ণ নাম",
    welcomeBack: "স্বাগতম",
    createAccount: "অ্যাকাউন্ট তৈরি করুন",
    alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    dontHaveAccount: "অ্যাকাউন্ট নেই?",
    planningDescription: "AI-চালিত ফসল পরিকল্পনা এবং সম্পদ অপ্টিমাইজেশন",
    communityDescription: "সহকর্মী কৃষক এবং কৃষি বিশেষজ্ঞদের সাথে সংযোগ করুন",
    marketDescription: "রিয়েল-টাইম বাজার মূল্য এবং ট্রেন্ড বিশ্লেষণ",
    calendarDescription: "কৃষি ইভেন্ট এবং মৌসুমী অনুস্মারক",
    language: "ভাষা",
    cropMonitoring: "ফসল পর্যবেক্ষণ",
    weatherForecast: "আবহাওয়ার পূর্বাভাস",
    soilHealth: "মাটির স্বাস্থ্য",
    yieldPrediction: "ফলন পূর্বাভাস",
    getStarted: "শুরু করুন",
    learnMore: "আরও জানুন",
    features: "বৈশিষ্ট্য",
    about: "সম্পর্কে",
    contact: "যোগাযোগ"
  }
};

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' }
];

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const t = translations[currentLanguage];

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    if (email && password) {
      setUser({ email, name: email.split('@')[0] });
      setIsAuthenticated(true);
      setShowLogin(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (name && email && password) {
      setUser({ email, name });
      setIsAuthenticated(true);
      setShowSignup(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold text-white">{t.title}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">{t.features}</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">{t.about}</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">{t.contact}</a>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setShowLanguageDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-white/80">Welcome, {user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>{t.logout}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-white/80 hover:text-white font-medium"
                  >
                    {t.login}
                  </button>
                  <button
                    onClick={() => setShowSignup(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {t.signup}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-white"
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">{t.features}</a>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">{t.about}</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">{t.contact}</a>
                
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
                  </button>
                  
                  {showLanguageDropdown && (
                    <div className="mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLanguage(lang.code);
                            setShowLanguageDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {isAuthenticated ? (
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-white/80 px-3">Welcome, {user?.name}</span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 px-3 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>{t.logout}</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setShowMobileMenu(false);
                      }}
                      className="text-left px-3 py-2 text-white/80 hover:text-white font-medium"
                    >
                      {t.login}
                    </button>
                    <button
                      onClick={() => {
                        setShowSignup(true);
                        setShowMobileMenu(false);
                      }}
                      className="text-left px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      {t.signup}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105">
              {t.getStarted}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-900 transition-all">
              {t.learnMore}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">{t.features}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{t.cropMonitoring}</h3>
              <p className="text-green-100">{t.planningDescription}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{t.weatherForecast}</h3>
              <p className="text-green-100">{t.marketDescription}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{t.soilHealth}</h3>
              <p className="text-green-100">{t.communityDescription}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{t.yieldPrediction}</h3>
              <p className="text-green-100">{t.calendarDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-green-400 mb-2">10K+</div>
              <div className="text-white">Active Farmers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white">Crop Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-xl font-bold text-white">{t.title}</span>
          </div>
          <p className="text-green-100 mb-6">{t.subtitle}</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-green-100 hover:text-white transition-colors">{t.about}</a>
            <a href="#" className="text-green-100 hover:text-white transition-colors">{t.features}</a>
            <a href="#" className="text-green-100 hover:text-white transition-colors">{t.contact}</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-green-100/60">© 2024 Krishi Quest 2.0. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t.welcomeBack}</h2>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.password}
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                {t.login}
              </button>
            </form>
            
            <p className="mt-4 text-center text-sm text-gray-600">
              {t.dontHaveAccount}{' '}
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {t.signup}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t.createAccount}</h2>
              <button
                onClick={() => setShowSignup(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.password}
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.confirmPassword}
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                {t.signup}
              </button>
            </form>
            
            <p className="mt-4 text-center text-sm text-gray-600">
              {t.alreadyHaveAccount}{' '}
              <button
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {t.login}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;