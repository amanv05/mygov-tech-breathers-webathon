import { useState } from "react";
import { Menu, X, ChevronDown, Search, User, Accessibility } from "lucide-react";
import ashokImage from "../assets/ashok.png";
import indianFlag from "../assets/India.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* Top Orange Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm text-white">
            <div className="flex items-center gap-4">
              <img
                src={indianFlag} alt="india" className="w-12 h-8" 
              />
              <span className="font-medium">GOVERNMENT OF INDIA</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="hover:opacity-80 transition-opacity">
                Skip to main content
              </button>
              <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
                <Accessibility className="w-4 h-4" />
                <span>Accessibility</span>
              </button>
              <Select defaultValue="en">
                <SelectTrigger className="w-[100px] h-7 bg-transparent border-white/40 text-white hover:bg-white/10">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी</SelectItem>
                  <SelectItem value="ta">தமிழ்</SelectItem>
                  <SelectItem value="te">తెలుగు</SelectItem>
                  <SelectItem value="bn">বাংলা</SelectItem>
                  <SelectItem value="mr">मराठी</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={ashokImage} alt="ashok" className="h-12 w-14" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">
                <span className="text-secondary">my</span>
                <span className="text-gray-800">GOV</span>
              </span>
              <span className="text-xs text-gray-600">मेरी सरकार</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {/* Activities Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-secondary font-medium py-2">
                Activities
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <ul className="p-3 text-sm text-gray-700 space-y-2">
                  <li className="hover:text-secondary cursor-pointer">Discussions</li>
                  <li className="hover:text-secondary cursor-pointer">Tasks</li>
                  <li className="hover:text-secondary cursor-pointer">Polls</li>
                  <li className="hover:text-secondary cursor-pointer">Pledges</li>
                  <li className="hover:text-secondary cursor-pointer">Quizzes</li>
                </ul>
              </div>
            </li>

            {/* MyGov States */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-secondary font-medium py-2">
                MyGov States
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <ul className="grid grid-cols-2 gap-2 p-3 text-sm text-gray-700">
                  <li className="hover:text-secondary cursor-pointer">Andhra Pradesh</li>
                  <li className="hover:text-secondary cursor-pointer">Gujarat</li>
                  <li className="hover:text-secondary cursor-pointer">Punjab</li>
                  <li className="hover:text-secondary cursor-pointer">Tamil Nadu</li>
                  <li className="hover:text-secondary cursor-pointer">Uttar Pradesh</li>
                  <li className="hover:text-secondary cursor-pointer">Maharashtra</li>
                </ul>
              </div>
            </li>

            {/* Microsites */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-secondary font-medium py-2">
                Microsites
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <ul className="p-3 text-sm text-gray-700 space-y-2">
                  <li className="hover:text-secondary cursor-pointer">Azadi Ka Amrit Mahotsav</li>
                  <li className="hover:text-secondary cursor-pointer">Swachh Bharat</li>
                  <li className="hover:text-secondary cursor-pointer">Fit India</li>
                  <li className="hover:text-secondary cursor-pointer">Digital India</li>
                </ul>
              </div>
            </li>

            {/* Get to Know */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-secondary font-medium py-2">
                Get to Know
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <ul className="p-3 text-sm text-gray-700 space-y-2">
                  <li className="hover:text-secondary cursor-pointer">About MyGov</li>
                  <li className="hover:text-secondary cursor-pointer">Leadership</li>
                  <li className="hover:text-secondary cursor-pointer">Partner With Us</li>
                </ul>
              </div>
            </li>

            {/* Help / Feedback */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-secondary font-medium py-2">
                Help/Feedback
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <ul className="p-3 text-sm text-gray-700 space-y-2">
                  <li className="hover:text-secondary cursor-pointer">Help Desk</li>
                  <li className="hover:text-secondary cursor-pointer">Contact Us</li>
                  <li className="hover:text-secondary cursor-pointer">Feedback Form</li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 relative">
            {/* Search */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                <User className="w-5 h-5 text-gray-700" />
              </button>

              {/* Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700 animate-fade-in">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign In</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign Up</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t animate-fade-in">
            <ul className="space-y-3 pt-4">
              <li><button className="w-full text-left text-gray-700 font-medium py-2">Activities</button></li>
              <li><button className="w-full text-left text-gray-700 font-medium py-2">MyGov States</button></li>
              <li><button className="w-full text-left text-gray-700 font-medium py-2">Microsites</button></li>
              <li><button className="w-full text-left text-gray-700 font-medium py-2">Get to Know</button></li>
              <li><button className="w-full text-left text-gray-700 font-medium py-2">Help/Feedback</button></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
