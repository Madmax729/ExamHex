import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Clock, FileCheck, Lock, Users } from 'lucide-react';
import GeometricAnimation from '../components/GeometricAnimation';

function Features() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption ensures your exam papers remain completely secure"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Blockchain Security",
      description: "Decentralized storage with immutable audit trails"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timed Release",
      description: "Schedule automatic decryption for exam time"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Format Support",
      description: "Support for PDF, Word, and other document formats"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Access Control",
      description: "Fine-grained permissions for different user roles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-User Support",
      description: "Collaborate securely with team members"
    }
  ];

  return (
    <div className="relative">
      <GeometricAnimation />
      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Features
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how SecureExam protects your examination papers with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Features;