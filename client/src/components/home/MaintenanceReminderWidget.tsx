import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Sun, Thermometer, Fan, Snowflake, ArrowRight } from 'lucide-react';
import { ScrollLink } from '@/utils/scrollToTop';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

interface SeasonData {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  primaryTip: string;
}

const seasonalData: Record<Season, SeasonData> = {
  spring: {
    title: 'Spring Maintenance',
    icon: <Sun className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Get your appliances ready for warmer weather',
    primaryTip: 'Clean refrigerator coils and check AC units'
  },
  summer: {
    title: 'Summer Maintenance',
    icon: <Thermometer className="h-6 w-6" />,
    color: 'from-orange-500 to-amber-600',
    description: 'Keep cool with properly maintained appliances',
    primaryTip: 'Check refrigerator and freezer temperature settings'
  },
  fall: {
    title: 'Fall Maintenance',
    icon: <Fan className="h-6 w-6" />,
    color: 'from-orange-600 to-red-600',
    description: 'Prepare for the holiday season',
    primaryTip: 'Service your oven and clean your dishwasher'
  },
  winter: {
    title: 'Winter Maintenance',
    icon: <Snowflake className="h-6 w-6" />,
    color: 'from-blue-500 to-indigo-600',
    description: 'Ensure appliances work efficiently in colder months',
    primaryTip: 'Check dryer vents and maintain water heaters'
  }
};

const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 8) return 'summer';
  if (month >= 9 && month <= 10) return 'fall';
  return 'winter';
};

export function MaintenanceReminderWidget() {
  const [currentSeason] = useState<Season>(getCurrentSeason());
  const season = seasonalData[currentSeason];

  return (
    <Card className="overflow-hidden shadow-md">
      <CardHeader className={`bg-gradient-to-r ${season.color} text-white pb-4`}>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-xl font-bold">
            {season.icon}
            {season.title}
          </CardTitle>
          <Calendar className="h-5 w-5 opacity-80" />
        </div>
        <p className="text-sm text-white/90 font-medium mt-1">
          {season.description}
        </p>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-2">Current Recommendation:</h3>
          <p className="text-gray-700 dark:text-gray-300">{season.primaryTip}</p>
        </div>
        
        <div className="flex justify-between gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <ScrollLink href="/maintenance" className="flex items-center justify-center w-full gap-1">
              View All Tips
              <ArrowRight className="h-4 w-4" />
            </ScrollLink>
          </Button>
          <Button size="sm" className="flex-1" asChild>
            <a href="/#contact">
              <span className="w-full">Schedule Service</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}