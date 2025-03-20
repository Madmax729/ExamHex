import React from 'react';
import { motion } from 'framer-motion';
import GeometricAnimation from '../components/GeometricAnimation';

function Documentation() {
  return (
    <div className="relative">
      <GeometricAnimation />
      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Documentation</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Quick Start Guide</a></li>
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Installation</a></li>
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Basic Concepts</a></li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Encryption Process</a></li>
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Access Control</a></li>
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Security Measures</a></li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">API Overview</a></li>
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Authentication</a></li>
                  <li><a href="#" className="text-indigo-600 hover:text-indigo-800">Endpoints</a></li>
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
                <p className="text-gray-600 mb-4">
                  Get started with SecureExam by following these simple steps to secure your examination papers.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <pre className="text-sm text-gray-700">
                    {`1. Create an account
2. Set up encryption keys
3. Upload your first document
4. Configure access controls
5. Monitor security status`}
                  </pre>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Security Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Always use strong passwords</li>
                  <li>Enable two-factor authentication</li>
                  <li>Regularly rotate encryption keys</li>
                  <li>Monitor access logs</li>
                  <li>Keep software up to date</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default Documentation;