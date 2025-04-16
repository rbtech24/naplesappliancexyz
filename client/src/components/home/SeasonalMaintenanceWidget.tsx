import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, AlertCircle, Thermometer, Fan, Snowflake, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

interface SeasonalTip {
  id: number;
  appliance: string;
  tip: string;
  importance: 'high' | 'medium' | 'low';
}

interface SeasonData {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  tips: SeasonalTip[];
}

const seasonalData: Record<Season, SeasonData> = {
  spring: {
    title: 'Spring Maintenance',
    icon: <Sun className="h-8 w-8" />,
    color: 'bg-green-100 text-green-800',
    description: 'Time to refresh your appliances as temperatures rise',
    tips: [
      { id: 1, appliance: 'Refrigerator', tip: 'Clean condenser coils and check door seals', importance: 'high' },
      { id: 2, appliance: 'AC Unit', tip: 'Replace air filters and clean vents', importance: 'high' },
      { id: 3, appliance: 'Dishwasher', tip: 'Clean spray arms and check drain for clogs', importance: 'medium' },
      { id: 4, appliance: 'Dryer', tip: 'Clean lint trap and check vent hoses', importance: 'high' },
    ]
  },
  summer: {
    title: 'Summer Maintenance',
    icon: <Thermometer className="h-8 w-8" />,
    color: 'bg-yellow-100 text-amber-800',
    description: 'Keep your appliances running cool during peak usage',
    tips: [
      { id: 1, appliance: 'Refrigerator', tip: 'Check temperature settings and clean ice maker', importance: 'high' },
      { id: 2, appliance: 'Freezer', tip: 'Defrost if ice buildup exceeds 1/4 inch', importance: 'medium' },
      { id: 3, appliance: 'AC Unit', tip: 'Clean outdoor unit and check coolant levels', importance: 'high' },
      { id: 4, appliance: 'Washer', tip: 'Check hoses for bulging or leaks', importance: 'medium' },
    ]
  },
  fall: {
    title: 'Fall Maintenance',
    icon: <Fan className="h-8 w-8" />,
    color: 'bg-orange-100 text-orange-800',
    description: 'Prepare your appliances for the coming winter months',
    tips: [
      { id: 1, appliance: 'Oven', tip: 'Clean thoroughly before holiday cooking season', importance: 'high' },
      { id: 2, appliance: 'Heater', tip: 'Replace filters and test before cold weather', importance: 'high' },
      { id: 3, appliance: 'Dishwasher', tip: 'Check heating element and clean interior', importance: 'medium' },
      { id: 4, appliance: 'Garbage Disposal', tip: 'Clean with ice and citrus peels to freshen', importance: 'low' },
    ]
  },
  winter: {
    title: 'Winter Maintenance',
    icon: <Snowflake className="h-8 w-8" />,
    color: 'bg-blue-100 text-blue-800',
    description: 'Ensure your appliances are winter-ready and efficient',
    tips: [
      { id: 1, appliance: 'Dryer', tip: 'Clean exhaust vent to prevent fire hazards', importance: 'high' },
      { id: 2, appliance: 'Water Heater', tip: 'Drain sediment and check pressure relief valve', importance: 'high' },
      { id: 3, appliance: 'Dishwasher', tip: 'Check water inlet valve and heating element', importance: 'medium' },
      { id: 4, appliance: 'Refrigerator', tip: 'Clean coils and check door gaskets', importance: 'medium' },
    ]
  }
};

const getCurrentSeason = (): Season => {
  const month = new Date().getMonth();
  
  // Simple seasonal determination for Florida
  if (month >= 2 && month <= 4) return 'spring';    // March to May
  if (month >= 5 && month <= 8) return 'summer';    // June to September
  if (month >= 9 && month <= 10) return 'fall';     // October to November
  return 'winter';                                  // December to February
};

export function SeasonalMaintenanceWidget() {
  const [currentSeason, setCurrentSeason] = useState<Season>(getCurrentSeason());
  const [completedTips, setCompletedTips] = useState<number[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // For demo purposes, explicitly set the season based on the date
  useEffect(() => {
    setCurrentSeason(getCurrentSeason());
  }, []);

  const toggleTipCompletion = (tipId: number) => {
    setCompletedTips(prev => 
      prev.includes(tipId) 
        ? prev.filter(id => id !== tipId)
        : [...prev, tipId]
    );
  };

  const season = seasonalData[currentSeason];
  const displayedTips = isExpanded ? season.tips : season.tips.slice(0, 2);
  const completionPercentage = Math.round((completedTips.length / season.tips.length) * 100);

  return (
    <Card className="overflow-hidden border-t-4" style={{ borderTopColor: season.color.split(' ')[0].replace('bg-', 'var(--') + '-500)' }}>
      <CardHeader className={cn("pb-3", season.color)}>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            {season.icon}
            {season.title}
          </CardTitle>
          <Calendar className="h-5 w-5 opacity-70" />
        </div>
        <CardDescription className="text-gray-700 dark:text-gray-300 font-medium">
          {season.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Maintenance Checklist</h3>
          <div className="text-sm font-medium">
            {completedTips.length} of {season.tips.length} completed
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" 
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        
        <ul className="space-y-3">
          {displayedTips.map(tip => (
            <li key={tip.id} className="flex items-start gap-3">
              <button
                onClick={() => toggleTipCompletion(tip.id)}
                className={cn(
                  "flex-shrink-0 h-5 w-5 mt-0.5 rounded-full flex items-center justify-center border",
                  completedTips.includes(tip.id) 
                    ? "bg-green-100 border-green-400" 
                    : "bg-white border-gray-300"
                )}
              >
                {completedTips.includes(tip.id) && <CheckCircle className="h-4 w-4 text-green-600" />}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{tip.appliance}</span>
                  {tip.importance === 'high' && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <AlertCircle className="h-3 w-3 mr-1" /> Priority
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tip.tip}</p>
              </div>
            </li>
          ))}
        </ul>
        
        {season.tips.length > 2 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="mt-3 w-full text-sm"
          >
            {isExpanded ? "Show Less" : `Show ${season.tips.length - 2} More Tips`}
          </Button>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-50 dark:bg-gray-900 border-t">
        <Button className="w-full" variant="outline">
          Schedule Seasonal Maintenance
        </Button>
      </CardFooter>
    </Card>
  );
}