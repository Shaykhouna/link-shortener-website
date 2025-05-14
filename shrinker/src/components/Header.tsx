import React from 'react';
import { LinkIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <LinkIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              LinkShrink
            </span>
          </div>
          <nav className="flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Sign Up
            </a>
          </nav>
        </div>
      </div>
    </header>;
}