import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, Briefcase, ShieldAlert } from 'lucide-react';

const HomePage = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return (
            <div className="fixed inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 flex items-center justify-center">
                <motion.h1 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="text-7xl font-extrabold text-yellow-300">Welcome to HR Spark</motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="text-2xl text-white mt-4">Empowering HR Professionals</motion.p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 text-white">
            <header className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-500 shadow-md py-4 mb-8 sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between px-6">
                    <h1 className="text-4xl font-extrabold text-white">HR Spark</h1>
                    <nav className="flex gap-6 text-lg">
                        <a href="#process" className="text-white hover:text-yellow-300">Recruitment Process</a>
                        <a href="#policies" className="text-white hover:text-yellow-300">Policies</a>
                        <a href="#templates" className="text-white hover:text-yellow-300">Templates</a>
                        <a href="#guides" className="text-white hover:text-yellow-300">Hiring Guides</a>
                        <a href="#about" className="text-white hover:text-yellow-300">About Me</a>
                        <a href="#contact" className="text-white hover:text-yellow-300">Contact</a>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-6">
                <section className="mb-16 text-center">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-6xl font-bold mb-4 text-yellow-300">Welcome to HR Spark</h2>
                        <p className="text-2xl text-white mb-8">A community-built platform to empower HRs, recruiters, and staffing professionals.</p>
                        <p className="text-lg text-white mb-8">Whether you're an aspiring HR professional, a recruiter in a consultancy, or an in-house HR looking to improve your hiring process — you're in the right place. This website is built by an HR, for HRs.</p>
                        <Button className="bg-yellow-300 text-purple-900 rounded-lg px-8 py-4 shadow-lg hover:bg-yellow-400 flex items-center gap-2 text-xl">Get Started <ArrowRight /></Button>
                    </motion.div>
                </section>

                <section id="about" className="mb-16">
                    <h2 className="text-5xl font-bold mb-8 text-yellow-300 text-center">About Me</h2>
                    <p className="text-xl text-white text-center mb-8">Hi, I’m Ankita — HR by Passion, Mentor by Choice. With 8 years of hands-on experience in HR, I have done it all — from recruitment to HR operations, employee engagement, business-oriented HR generalist roles, and team handling.</p>
                    <p className="text-lg text-white mb-8">I started this platform with one simple idea: 👉 To make HR easier, smarter, and more human.</p>
                    <ul className="list-disc pl-10 text-lg text-white">
                        <li>Build scalable hiring strategies</li>
                        <li>Create practical HR policies</li>
                        <li>Mentor freshers in the HR field</li>
                        <li>Help companies streamline their HR operations</li>
                        <li>Lead impactful employee engagement initiatives</li>
                        <li>Learn continuously & share generously</li>
                    </ul>
                    <p className="text-lg text-white mt-8">🔍 My Vision for This Website</p>
                    <ul className="list-disc pl-10 text-lg text-white">
                        <li>Offer free, actionable resources for HR and recruitment</li>
                        <li>Guide young professionals into confident, capable HR leaders</li>
                        <li>Build a community of like-minded HRs who believe in learning and growing together</li>
                    </ul>
                    <p className="text-lg text-white mt-8">📬 Want to Connect?</p>
                    <ul className="list-disc pl-10 text-lg text-white">
                        <li>🔗 <a href="https://linkedin.com/in/ankita-gita-shastri" target="_blank" className="text-yellow-300">LinkedIn Profile</a></li>
                        <li>📧 <a href="mailto:hrankita75@gmail.com" className="text-yellow-300">hrankita75@gmail.com</a></li>
                    </ul>
                </section>
            </main>
            <footer className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-500 py-6 mt-16">
                <p className="text-center text-white">© 2025 HR Spark. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
