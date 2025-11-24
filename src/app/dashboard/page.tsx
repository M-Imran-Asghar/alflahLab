'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, FileText } from 'lucide-react';
import TestComponent from '@/components/TestComponent';

export default function DashboardPage() {
  const router = useRouter();

  const features = [
    {
      title: 'Quick Registration',
      description: 'Register new patients with all necessary details in just a few clicks.',
      icon: <FileText className="h-6 w-6 text-primary" />,
      path: '/dashboard/registration',
    },
    {
      title: 'Patient Records',
      description: 'Access and manage all patient records efficiently.',
      icon: <Users className="h-6 w-6 text-primary" />,
      path: '/dashboard/records',
    },
    {
      title: 'Verification',
      description: 'Verify patient information and test results.',
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      path: '/dashboard/verification',
    },
    {
      title: 'Reports & Summary',
      description: 'View detailed reports and analytics.',
      icon: <Clock className="h-6 w-6 text-primary" />,
      path: '/dashboard/summary',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-8">
      <TestComponent />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Alflah Lab</h1>
        <p className="text-muted-foreground">Efficiently manage your laboratory operations</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card 
              className="h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => router.push(feature.path)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{feature.title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-xs text-muted-foreground">{feature.description}</p>
                <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-card border rounded-lg p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" className="justify-start" onClick={() => router.push('/dashboard/registration')}>
            <FileText className="mr-2 h-4 w-4" /> New Registration
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => router.push('/dashboard/records')}>
            <Users className="mr-2 h-4 w-4" /> View Records
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => router.push('/dashboard/verification')}>
            <CheckCircle className="mr-2 h-4 w-4" /> Verify Results
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => router.push('/dashboard/summary')}>
            <Clock className="mr-2 h-4 w-4" /> View Reports
          </Button>
        </div>
      </motion.div>
    </div>
  );
}