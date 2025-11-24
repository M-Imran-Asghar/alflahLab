'use client';

import React from 'react';

export default function TestComponent() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
          T
        </div>
      </div>
      <div>
        <div className="text-xl font-medium text-black">Test Component</div>
        <p className="text-gray-500">If you see this styled correctly, Tailwind is working!</p>
      </div>
    </div>
  );
}
