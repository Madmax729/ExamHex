import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Lock, FileCheck } from 'lucide-react';
import GeometricAnimation from '../components/GeometricAnimation';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative overflow-hidden">
      <GeometricAnimation />
      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6 mt-30">
              The standard for
              <br />
              exam security
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              SecureExam is defining how institutions protect and manage their examination papers.
            </p>
            <div className="flex gap-4">
                <Link to='/dashboard'>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">

                Start Encrypting
              </button>
                </Link>
                
             
              <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg text-lg font-semibold hover:border-gray-300 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Upload className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Upload Papers</h3>
              <p className="text-gray-600">
                Securely upload your examination papers in multiple formats
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Lock className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Encrypt Content</h3>
              <p className="text-gray-600">
                Advanced encryption algorithms protect your content
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <FileCheck className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Verify Security</h3>
              <p className="text-gray-600">
                Track and verify the security status of your papers
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default Home;